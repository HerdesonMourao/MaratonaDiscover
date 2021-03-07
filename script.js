const Modal = {
    open(){
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close(){
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
};

const transactions = [
    {
        id: 1,
        description: 'Luz',
        date: '07/03/2021',
        amount: -50000, //em centavos
    },
    {
        id: 2,
        description: 'Energia',
        date: '04/03/2021',
        amount: 7560, //em centavos
    }
];

const Transaction = {
    incomes(){
        //somar entradas
    },
    expenses(){
        //somar saídas
    },
    total(){
        //incomes - expenses
    }
};

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index){
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);

        DOM.transactionsContainer.appendChild(tr);
    },

    innerHTMLTransaction(transaction){
        const CSSclass = transaction.amount > 0 ? "income" : "expense";
        const amount = Utils.formatCurrency(transaction.amount);
        
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="date">${transaction.date}</td>
            <td class="${CSSclass}">${amount}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `
 
        return html;
    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : "";

        value = String(value).replace(/\D/g, "");
        value = Number(value) / 100;
        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value;
    } 
}

transactions.forEach(function(transaction){
    DOM.addTransaction(transaction);
})