export const cards = [
    {
    title: "Adquirência",
    description: "Gerencie e solicite maquininhas",
    link: "/dashboard/maquininhas",
    image: "../cardImages/shopbanx1.svg",
    alt: "Shopbanx logo in white"

},
{
    title: "Crédito",
    description: "Empréstimo para o seu negócio",
    link: "/dashboard/credito",
    image: "../cardImages/shopbanx2.svg",
    alt: "Shopbanx logo, light pink background"

},
{
    title: "Antecipação de recebíveis",
    description: "Adiante os valores das suas vendas",
    link: "/dashboard/antecipacao",
    image: "../cardImages/shopbanx3.svg",
    alt: "Shopbanx simbol, graphic elements"

},
// {
//     title: "Novidades",
//     description: "Novas taxas de maquininhas!",
//     link: "/dashboard/",
//     image: "../cardImages/shopbanx4.svg",
//     alt: "Shopbanx logo"

// },
]

export const flags = [
    {
        label: "Mastercard e Visa",
        value: "Mastercard e Visa"
    },
    {
        label: "Elo, Amex e Hipercard",
        value: "Elo, Amex e Hipercard"
    }
]

export const paymentForm = [
    {
        label: "Débito à vista",
        value: "debito"
    },
   
]

for(let i = 1; i < 13; i++) {
    paymentForm.push({
        label: `Crédito em ${i}x`,
        value: `${i.toString()}x`
    })
}

export const ReceivingDeadline = [
    {
        label: "Receber em 1 dia",
        value: "1 dia"
    },
    {
        label: "Receber conforme parcelamento",
        value: "parcelamento"
    },
   
]