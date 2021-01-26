import hydro_mc
from browser import document, window
#from browser import alert
#from browser.widgets.dialog import InfoDialog
#import traceback
#storage = window.localStorage
alert = window.alert
from browser.local_storage import storage


def store():
    #save form values in internal browser memory
    for i,e in enumerate(document.select('input, select')):
        k = '%s_%d'%(e.name,i)
        storage[k] = e.value

def restore(default_values):
    #restore form values from internal browser memory
    for i,e in enumerate(document.select('input, select')):
        k = '%s_%d'%(e.name,i)
        if 'result' in e.class_name:
            continue
        if k in storage:
            e.value = storage[k]
        elif k in default_values:
            e.value = default_values[k]



def put_exponent(s):
    " convert floating point to string with html exponent (es. 2e3 -> '2 \cdot 10<sup>3</sup>')" 
    if 'e' not in s:
        return s
    if 'e' in s:
        base,exponent = s.split('e')
        if exponent[0]=='+':
            exponent = exponent[1:]
        if exponent[0]=='0' :
            exponent = exponent[1:]
        return base+ ' &middot; 10<sup>'+exponent+'</sup>'


def on_change(ev):
    form = {}
    #
    # loop on form elements
    #
    for e in document.select('form [name]'):
        k = e.attrs['name']
        v_str = e.value
        if v_str=='':
            raise Exception('Field %s is empty'%k)
        #
        # decide if we have to convert form element to either float or string (es. '200c')
        #
        if not(('c' in v_str) or ('v' in v_str) or ('m' in v_str)):
            try:
                v = float(v_str)
            except:
                raise Exception('Unable to convert "%s" value "%s" to float'%(k, v_str))
            if v_str==0.:
                raise Exception('The value of "%s" cannot be zero'%(k))
        else:
            v=v_str    

        form[k] = v
        #
        # write scale factor eventually
        #
        if k=='z':
            form['a'] = 1./(1.+form['z'])
            document['a'].html = '(a = %.3f)'%(form['a'])

    print(form)
    store()

    #
    # compute concentration of delta1
    #
    c_delta1 = hydro_mc.concentration_from_mc_relation(form['delta1'], form['M'], form['a'], form['omega_m'], form['omega_b'], form['sigma8'], form['h0'])
    print('c_Delta1',c_delta1)
    document['c_delta1'].html = 'c<sub>%s</sub> = %.3f'%(form['delta1'], c_delta1)

    if (form['delta1']==form['delta2']):
        raise Exception('To convert masses, &Delta;2 must be different than &Delta;2')
    
    #
    # compute delta2 data
    #
    M_delta2 = hydro_mc.mass_from_mm_relation(form['delta1'], form['delta2'], form['M'], form['a'], form['omega_m'], form['omega_b'], form['sigma8'], form['h0'])
    c_delta2 = hydro_mc.concentration_from_mc_relation(form['delta2'], M_delta2, form['a'], form['omega_m'], form['omega_b'], form['sigma8'], form['h0'])

    print('Mdelta2',M_delta2)
    print('cdelta2',c_delta2)
    document['M_delta2'].html = 'M<sub>%s</sub> = %s;'%(form['delta2'], put_exponent('%.3e'%M_delta2))
    document['c_delta2'].html = 'c<sub>%s</sub> = %.3f'%(form['delta2'], c_delta2)
    
def on_change_try(ev):
    document['error'].html = ''
    try:
        on_change(ev)
    except Exception as e:
        print(e, str(e))
        document['error'].html = 'Warning: %s'%(str(e))

    
for e in document.select('[name]'):
    e.bind("change", on_change_try)

#_default_values = {"M_5":"2e14","delta_ignore_6":"200c","cdelta_result_8":"3.8661","omega_b_1":"0.04","z_ignore_4":"0.0","h0_3":"0.7","output_ignore_7":"c","sigma8_2":"0.8","omega_m_0":"0.3"}
restore({})

document['loading'].style.display='none'

