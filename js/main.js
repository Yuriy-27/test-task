window.onload = function () {
    var bitcoin_visa = document.querySelector('.visa');
    var bitcoin_etherium = document.querySelector('.etherium');
    var bitcoin_adv = document.querySelector('.advcash');
    var sendImg = document.querySelector('.send-img');
    var currentCurrency = document.querySelector('.current-currency');
    var sendBitcoin = document.querySelector('#first');
    var sendCard = document.querySelector('#second');
    var sendEtherium = document.querySelector('#third');
    var sendAdvCash = document.querySelector('#fourth');
    var sendOptions = document.querySelector('.send-options');
    var sendCurrency = document.querySelector('.send-currency');
    var commission = document.querySelector('.commission');
    var checkbox = document.querySelector('.checkbox');

    var section1 = document.querySelector('.section_1');
    var section2 = document.querySelector('.section_2');
    var getImg = document.querySelector('.get-img');
    var getCurrency = document.querySelector('.get-currency');
    var getCash = document.querySelector('.getCash');
    var getOptions = document.querySelector('.get-options');
    var getBitcoin = document.querySelector('#get1');
    var getCard = document.querySelector('#get2');
    var getEtherium = document.querySelector('#get3');
    var getAdvCash = document.querySelector('#get4');

    // var input = document.querySelector('.userValue');
    // var sendValue = document.querySelector('.user-send');
    
    // sendValue.onclick =  function () {
    //     input.style.display = 'block';
    //     sendValue.style.marginTop = '11px';
    // };

    sendCurrency.onclick = function () {
        if (sendOptions.style.display == 'flex') {
            sendOptions.style.display = 'none';
            commission.style.display = 'block';
            section2.style.display = 'flex';
            checkbox.style.display = 'flex';
        } else {
            sendOptions.style.display = 'flex';
            commission.style.display = 'none';
            section2.style.display = 'none';
            checkbox.style.display = 'none';
        }
    };

    getCurrency.onclick = function () {
        if (getOptions.style.display == 'flex') {
            getOptions.style.display = 'none';
            commission.style.display = 'block';
            section1.style.display = 'flex';
            checkbox.style.display = 'flex';
        } else {
            getOptions.style.display = 'flex';
            commission.style.display = 'none';
            section1.style.display = 'none';
            checkbox.style.display = 'none';
        }
    };



    bitcoin_visa.onclick = function () {
        if (sendOptions.style.display != 'none') {
            sendOptions.style.display = 'none';
        }
        currentCurrency.innerHTML = "Bitcoin BTN";
        sendImg.style.backgroundImage = 'url(../images/bitcoin.png)';

        getCash.innerHTML = 'Visa/Mastercard UAH';
        getImg.style.backgroundImage = 'url(../images/card.png)';
    };

    bitcoin_etherium.onclick = function () {
        if (sendOptions.style.display != 'none') {
            sendOptions.style.display = 'none';
        }
        sendImg.style.backgroundImage = 'url(../images/bitcoin.png)';
        currentCurrency.innerHTML = "Bitcoin BTN";

        getCash.innerHTML = 'Etherium ETH';
        getImg.style.backgroundImage = 'url(../images/etherium.png)';
    };

    bitcoin_adv.onclick = function () {
        if (sendOptions.style.display != 'none') {
            sendOptions.style.display = 'none';
        }
        sendImg.style.backgroundImage = 'url(../images/bitcoin.png)';
        currentCurrency.innerHTML = "Bitcoin BTN";

        getCash.innerHTML = 'Advanced Cash ADC';
        getImg.style.backgroundImage = 'url(../images/advcash.png)';
    };


    sendBitcoin.onclick = function () {
        sendImg.style.backgroundImage = 'url(../images/bitcoin.png)';
        currentCurrency.innerHTML = "Bitcoin BTN";
        sendOptions.style.display = 'none';
        commission.style.display = 'block';
        section2.style.display = 'flex';
        checkbox.style.display = 'flex';
    };

    sendCard.onclick = function () {
        sendImg.style.backgroundImage = 'url(../images/card.png)';
        currentCurrency.innerHTML = "Visa/Mastercard UAH";
        sendOptions.style.display = 'none';
        commission.style.display = 'block';
        section2.style.display = 'flex';
        checkbox.style.display = 'flex';
    };

    sendEtherium.onclick = function () {
        sendImg.style.backgroundImage = 'url(../images/etherium.png)';
        currentCurrency.innerHTML = "Etherium ETH";
        sendOptions.style.display = 'none';
        commission.style.display = 'block';
        section2.style.display = 'flex';
        checkbox.style.display = 'flex';
    };

    sendAdvCash.onclick = function () {
        sendImg.style.backgroundImage = 'url(../images/advcash.png)';
        currentCurrency.innerHTML = "Advanced Cash ADC";
        sendOptions.style.display = 'none';
        commission.style.display = 'block';
        section2.style.display = 'flex';
        checkbox.style.display = 'flex';
    };

    getBitcoin.onclick = function () {
        getImg.style.backgroundImage = 'url(../images/bitcoin.png)';
        getCash.innerHTML = "Bitcoin BTN";
        getOptions.style.display = 'none';
        commission.style.display = 'block';
        section1.style.display = 'flex';
        checkbox.style.display = 'flex';
    };

    getCard.onclick = function () {
        getImg.style.backgroundImage = 'url(../images/card.png)';
        getCash.innerHTML = "Visa/Mastercard UAH";
        getOptions.style.display = 'none';
        commission.style.display = 'block';
        section1.style.display = 'flex';
        checkbox.style.display = 'flex';
    };

    getEtherium.onclick = function () {
        getImg.style.backgroundImage = 'url(../images/etherium.png)';
        getCash.innerHTML = "Etherium ETH";
        getOptions.style.display = 'none';
        commission.style.display = 'block';
        section1.style.display = 'flex';
        checkbox.style.display = 'flex';
    };

    getAdvCash.onclick = function () {
        getImg.style.backgroundImage = 'url(../images/advcash.png)';
        getCash.innerHTML = "Advanced Cash ADC";
        getOptions.style.display = 'none';
        commission.style.display = 'block';
        section1.style.display = 'flex';
        checkbox.style.display = 'flex';
    };
};
