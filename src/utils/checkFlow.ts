export const checkFlow = (flowPosition: string) => {
    switch(flowPosition){
        case "password-recovery": 
        return {
            breadcrumb: "Voltar",
            title: "Recuperar senha",
            text: "Escolha como quer receber o código para recuperar sua senha."
        }
        case "new-user":
        return {
            breadcrumb: "Voltar ao login",
            title: "Bem-vindo(a)!",
            text: "Vimos que você já possui cadastro em nosso sistema, selecione abaixo como gostaria de validar seu novo acesso.",
        }
    }
}