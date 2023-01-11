import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { DynamicIcon } from "../components/DynamicIcon"


export function CheckPassword(password: string) {
    const [quantity, setQuantity] = useState(false)
    const [uppercase, setUppercase] = useState(false)
    const [lowercase, serLowercase] = useState(false)
    const [specialChar, setSpecialChar] = useState(false)
    const [number, setNumber] = useState(false)

    const passwordValidate = () => {
        
            if (password.length > 7) {
                setQuantity(true)
            } else {
                setQuantity(false)
            }
    
            if (password.match(/[A-Z]+/)) {
                setUppercase(true)
            } else {
                setUppercase(false)
            }
    
            if (password.match(/[a-z]+/)) {
                serLowercase(true)
            } else {
                serLowercase(false)
            }
    
            if (password.match(/(?=.*\W+)/)) {
                setSpecialChar(true)
            } else {
                setSpecialChar(false)
            }
            if (password.match(/[0-9]+/)) {
                setNumber(true)
            } else {
                setNumber(false)
            }



        

    }

    useEffect(() => {
        passwordValidate()
    })

    return (
        <Flex direction="column" color="content.lighter" >
            <Flex gap="8px" alignItems="center">
                <DynamicIcon  w="18px" h="18px" icon={quantity ? "check" : "not-check"} />
                8 caracteres
            </Flex>
            <Flex gap="8px" alignItems="center">
                <DynamicIcon  w="18px" h="18px" icon={uppercase ? "check" : "not-check"} />
                1 letra maiúscula
            </Flex>
            <Flex gap="8px" alignItems="center">
                <DynamicIcon w="18px" h="18px" icon={lowercase ? "check" : "not-check"} />
                1 letra minúscula
            </Flex>
            <Flex gap="8px" alignItems="center">
                <DynamicIcon w="18px" h="18px" icon={specialChar ? "check" : "not-check"} />
                1 caractere especial
            </Flex>
            <Flex gap="8px" alignItems="center">
                <DynamicIcon w="18px" h="18px" icon={number ? "check" : "not-check"} />
                1 número
            </Flex>
        </Flex>
    )
}
