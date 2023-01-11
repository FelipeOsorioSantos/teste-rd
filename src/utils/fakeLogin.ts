export const fakeLogin = [{
    name: "Bruna Celestino",
    email: "brunaccelestino@gmail.com",
    celular: "(12) 98892-4146",
    whatsapp: "(12) 98892-4146",
    senha: "Fortes12@",
    cpf: "39280053833",
    code: "999999",
    birthDate: "09/10/1995",
    lastRequest: "2022-09-15T18:35:06Z"
},
{
    name: "Felipe Fortes",
    email: "luis.massuchini@gmail.com",
    celular: "(12) 98857-1571",
    whatsapp: "(12) 98857-1571",
    senha: "Fortes12@",
    cpf: "45436773826",
    code: "000000",
    birthDate: "15/11/1995"
}

]

export const cnpjs = [
    {
        cnpj: "39280053833",
        nexoos: false,
        requests: [{
            date: "2022-11-10T17:24:45Z",
            establishment: "Casa de Suco",
            value: 2000

        },
        {
            date: "2022-09-10T17:24:45Z",
            establishment: "Casa de Açaí",
            value: 20000

        }]
    },
    {
        cnpj: "45436773826", 
        nexoos: true,
        requests: [{
            date: "2022-08-10T17:24:45Z",
            establishment: "Casa de Suco",
            value: 2000

        },
        {
            date: "2022-07-06T17:24:45Z",
            establishment: "Casa de Açaí",
            value: 20000

        }]
    }, 
]

export const NParcelas = [{
    label: "À vista",
    value:  "1"
},


]

for(let i=2; i< 25; i++) {
    NParcelas.push({
        label: "Parcelado em " + i +"x",
        value: i.toString()
    })
}

export const MotivoSolicitacao = [
    {
        label: "Expansão da empresa",
        value:  "expansao"
    },
    {
        label: "Capital de giro",
        value:  "capitalgiro"
    },
    {
        label: "Compra de estoque",
        value:  "estoque"
    },
    {
        label: "Refinanciamento",
        value:  "refinanciamento"
    },
    {
        label: "Outros",
        value:  "outro"
    },
]

export const establishment =[{
    id: "1",
    legalName: "João Móveis Planejados (Loja 1)",
    razaoSocial: "João Móveis LTDA",
    CNPJ: "86180487000157",
    nomeFantasia: "João Móveis Planejeados",
    type: "Comércio e venda de móveis",
    address:{
        street: "Rua Logo Ali",
        number: "31",
        complemento: "Loja 1",
        neighborhood: "Jardim Nowhere",
        city: "Jacareí",
        cep: "12319-060",
        country: "Brasil",
        state: "São Paulo"
    },
    sales: [{
        client: "Gustavo Henrique",
        date: "2022-09-15T12:29:06Z",
        type: "crédito",
        parcelas: "5",
        nparcelas: "1",
        value: "10000",
        status: "processing"
    },
    {
        client: "Alessandro Bentivegna",
        date: "2022-11-17T11:05:06Z",
        type: "débito",
        parcelas: "0",
        nparcelas: "0",
        value: "9000",
        status: "canceled"
    },
    {
        client: "Felipe Fortes",
        date: "2022-11-15T11:05:06Z",
        type: "pix",
        parcelas: "0",
        nparcelas: "0",
        value: "700",
        status: "processing"
    },
    
    {
        client: "Matheus Pinheiro",
        date: "2022-10-15T14:37:06Z",
        type: "crédito",
        parcelas: "0",
        nparcelas: "0",
        value: "11000",
        status: "finished"
    },
    
    {
        client: "Cassiano Rodrigues",
        date: "2022-10-15T14:37:06Z",
        type: "crédito",
        parcelas: "0",
        nparcelas: "0",
        value: "12000",
        status: "processing"
    },
    {
        client: "Bruna Celestino",
        date: "2022-01-26T09:12:06Z",
        type: "débito",
        parcelas: "0",
        nparcelas: "0",
        value: "5000",
        status: "finished"
    }
    
    ]
},
{
    id: "2",
    legalName: "João Móveis Planejados (Loja 2)",
    razaoSocial: "João Móveis LTDA",
    CNPJ: "49213676000152",
    nomeFantasia: "João Móveis Planejeados",
    type: "Comércio e venda de móveis",
    address:{
        street: "Rua Logo Lá",
        number: "32",
        complemento: "Loja 2",
        neighborhood: "Jardim Nowhere",
        city: "São Paulo",
        cep: "12319-060",
        country: "Brasil",
        state: "São Paulo"
    },
    sales: [{
        client: "Gustavo Henrique",
        date: "2022-09-15T12:29:06Z",
        type: "crédito",
        parcelas: "5",
        nparcelas: "1",
        value: "10000",
        status: "finished"
    },
    {
        client: "Alessandro Bentivegna",
        date: "2022-11-17T11:05:06Z",
        type: "débito",
        parcelas: "0",
        nparcelas: "0",
        value: "9000",
        status: "processing"
    },
    
    {
        client: "Matheus Pinheiro",
        date: "2022-10-15T14:37:06Z",
        type: "crédito",
        parcelas: "0",
        nparcelas: "0",
        value: "11000",
        status: "canceled"
    },
    
    {
        client: "Cassiano Rodrigues",
        date: "2022-10-15T14:37:06Z",
        type: "crédito",
        parcelas: "0",
        nparcelas: "0",
        value: "12000",
        status: "processing"
    },
    {
        client: "Ariel Santos",
        date: "2022-01-26T09:12:06Z",
        type: "débito",
        parcelas: "0",
        nparcelas: "0",
        value: "5000",
        status: "finished"
    }]



}]

export const sales =[{
    client: "Gustavo Henrique",
    date: "2022-09-15T12:29:06Z",
    type: "crédito",
    parcelas: "5",
    nparcelas: "1",
    value: "10000",
    status: "finished"
},
{
    client: "Alessandro Bentivegna",
    date: "2022-11-17T11:05:06Z",
    type: "débito",
    parcelas: "0",
    nparcelas: "0",
    value: "9000",
    status: "processing"
},

{
    client: "Matheus Pinheiro",
    date: "2022-10-15T14:37:06Z",
    type: "crédito",
    parcelas: "0",
    nparcelas: "0",
    value: "11000",
    status: "processing"
},

{
    client: "Cassiano Rodrigues",
    date: "2022-10-15T14:37:06Z",
    type: "crédito",
    parcelas: "0",
    nparcelas: "0",
    value: "12000",
    status: "finished"
},
{
    client: "Bruna Celestino",
    date: "2022-01-26T09:12:06Z",
    type: "débito",
    parcelas: "0",
    nparcelas: "0",
    value: "5000",
    status: "finished"
}

]