document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container')
    const allBorder = document.getElementById('radiusRange');
    const span_value = document.getElementById('all_value');
    const copyBtn = document.querySelector('.btnCopy')
    const code = document.getElementById('code');

    
    const borderInput = document.getElementById('borderRange');
    const border_value = document.getElementById('border_value');
    const styBorder = document.querySelector('#styled')

    
    let all_radios = 10;

    let border_size = 3;
    let boredr_style = 'ridge';

    let coding = '';


    function allBorderUpdate () {
        all_radios = allBorder.value;
        span_value.innerText = all_radios +'px';

        // border styled
        border_size = borderInput.value;
        border_value.innerText = border_size +'px';
        coding = `
            border-radius:${all_radios}px;
            border: ${border_size}px ${boredr_style} red;

        `;
        code.value = coding;
        container.style.cssText = coding;
        
    };
    

    allBorder.addEventListener('mousemove',allBorderUpdate );
    allBorder.addEventListener('change',allBorderUpdate );

    copyBtn.addEventListener('click', () => {
        document.querySelector('textarea').select();
        document.execCommand('copy')
        alert('code copy');
    })

    function borderStyed () {
            boredr_style = this.value;
            allBorderUpdate();
    }

    styBorder.addEventListener('change', borderStyed);

    allBorderUpdate();

})