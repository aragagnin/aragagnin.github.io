#!/usr/bin/env python3
"""
Script to generate HTML bibliography from BibTeX file in MNRAS style.
"""

import re
from pathlib import Path


def clean(s):
    return s.replace('{','').replace('}','').strip()


def parse_bibtex(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    entries_str = content.split('\n\n')
    entries = []
    for entry in entries_str:
        d = dict(raw = entry)
        for line in entry.split('\n'):
            if '=' in line:
                try:
                    k,v = line.split('=',1)
                except:
                    print(line)
                    raise
                d[k.strip().lower()] = clean(v.strip())
        entries.append(d)
    return entries

def generate_citation_html(entries):
    #html = '''<script>function copy_text(t) {navigator.clipboard.writeText(text).then(()=>alert("done"))}</script>\n'''
    """
    html = '''
    <dialog id='bibDialog'>
        <button onclick="()=>{navigator.clipboard.writeText(bibText.textContent);alert('done!')}">
            copy to clipboard
        </button>
        <button onclick='bibDialog.close()' style='float:right'>x</button>
        <pre id='bibText'></pre>
    </dialog>
    '''
    """
    html = '<ol type="1" reversed>'
    e_n = len(entries)
    for ie, e in enumerate(entries):
        try:
            authors = e['author'].split('and')
        except:
            print(e)
            for k,v in e.items():
                print(k,v)
            raise
        ragagnin_found = False
        mellier = 'Mellier' in authors[0]
        bibtex = e['raw']
        #html += f"<p>[{e_n - ie}] "
        #html +=  f" <button onclick='showBibtex({bibtex!r})'>BibTeX</button>"
        html += '<li>'
        #html += '<span class="authors">'
        for iauthor, author in enumerate(authors):
            author_clean = author.replace('Ragagnin','<b>Ragagnin</b>').strip()
            author_clean = author_clean.replace(r"\'a","&agrave;")
            author_clean = author_clean.replace(r"\'c","&cgrave;")
            author_clean = author_clean.replace(r"\'o","&ograve;")
            author_clean = author_clean.replace(r"\`o","&oacute;")
            author_clean = author_clean.replace(r"\'u","&ugrave;")
            author_clean = author_clean.replace(r"\"u","&uuml;")
            author_clean = author_clean.replace(r"\vs","&scaron;")
            author_clean = author_clean.replace(',','')
            
            ragagnin_found |= 'Ragagnin' in author_clean
            html += f"{author_clean}"
            if mellier or (ragagnin_found and iauthor>=6):
                break
            html += ', '
        if (iauthor<(len(authors)-1)):
            html += ' et al., '
        #html += '</span>'

        title = e['title'].replace(r'\ensuremath','').replace(r'\Lambda','&Lambda;').replace(r'\nu','&nu;')
        html += f"({e['year'].replace(',','')}) <i>{title}</i> "

        try:
            journal = e.get('journal', e.get('booktitle', e.get('school')))
            journal = journal.replace(r'\aap','Astronomy & Astrophysics')
            journal = journal.replace(r'\mnras','Monthly Notices of the Royal Astronomical Society')
            journal = journal.replace(r'\memsai','Memorie della Sait')
            html += f"{journal} "
        except:
            print(e)
            raise
        if 'issn' in e:
             html += f"issn {e['issn']} "
        if 'volume' in e:
            html += f"vol. {e['volume']} "
        if 'pages' in e:
            html += f"{e['pages']} "
        try:
            if 'doi' in e:
                doi = e['doi'][:-1].replace('https://doi.org/','')
                html += f"<a href='https://doi.org/{doi}'>{doi}</a>"
            elif 'journalpdf' in e:
                link = e['journalpdf'][:-1]
                html += f"<a href='{link}'>[official]</a>"
            else:
                raise Exception("no doi no journal pdf")
        except:
            print(e)
            for k,v in e.items():
                print(k,v)
            raise
        #html += '</p>\n\n\n'
        html += '</li>\n\n\n'
    html += '</ol>'
    return html

def main():
    bibtex_path = Path(__file__).parent / 'ragagnin.bib'
    index_path = Path(__file__).parent / 'index.html'
    
    entries = parse_bibtex(bibtex_path)
    citations_html = generate_citation_html(entries)
    
    print(f"Reading existing index.html: {index_path}")
    with open(index_path, 'r', encoding='utf-8') as f:
        index_content = f.read()
    
    # Insert citations between <!--start--> and <!--end-->
    start_marker = '<!--start-->'
    end_marker = '<!--end-->'
    
    start_idx = index_content.find(start_marker)
    end_idx = index_content.find(end_marker)
    
    if start_idx == -1 or end_idx == -1:
        print("ERROR: Could not find <!--start--> or <!--end--> markers in index.html")
        return
    
    # Insert citations after <!--start-->
    insert_idx = start_idx + len(start_marker)
    new_content = index_content[:insert_idx] + '\n' + citations_html + '\n' + index_content[end_idx:]
    
    print(f"Writing updated index.html: {index_path}")
    with open(index_path, 'w', encoding='utf-8') as f:
        print(new_content)
        f.write(new_content)
    
    print("Done!")

if __name__ == '__main__':
    main()

