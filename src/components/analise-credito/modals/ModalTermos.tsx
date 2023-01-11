import { Flex, ModalContent, ModalOverlay, Text } from '@chakra-ui/react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { DynamicIcon } from '../../DynamicIcon';

interface ModalTermosProps {
  onClose?: () => void;
}

export const ModalTermos = ({ onClose }: ModalTermosProps) => {
  const isLargerThan768 = useWindowSize();
  return (
    <>
      <ModalOverlay />
      <ModalContent
        maxH="100vh"
        m={isLargerThan768 ? '32px' : '0px'}
        p="0px"
        // borderRadius="16px"
        borderRadius={isLargerThan768 ? '16px' : '0px'}
        w={isLargerThan768 ? '375px' : '100%'}
        overflowY="scroll"
      >
        <Flex px="28px" direction="column">
          <Flex transform="rotate(90deg)" w="32px" mt="12px" onClick={onClose}>
            <DynamicIcon icon="chevron-box" />
          </Flex>
          <Text as="strong" mt="20px">
            TERMOS DE USO
          </Text>
          <Text fontSize="14px" color="content.base" mt="16px" mb="12px">
            Estes Termos de Uso (`&quot;`Termos`&quot;`) regulam sua relação com
            o SHOPBANX MEIOS DE PAGAMENTOS S.A (Shopbanx) quando você utiliza
            qualquer um dos nossos website , como por exemplo,
            www.shopbanx.com.br (o `&quot;`Site`&quot;`), e detalha em que
            hipóteses e para quais finalidades utilizamos suas informações
            quando você interage com quaisquer dos Sites do Shopbanx. Estes
            Termos não são aplicáveis a quaisquer terceiros, inclusive mídias
            sociais como Facebook, Instagram e YouTube, ainda que você utilize
            tais mídias para se conectar conosco, e você deve sempre se atentar
            aos termos e políticas aplicáveis a quaisquer sites ou plataformas
            de terceiros que você visitar. 1 - As informações fornecidas no site
            do Shopbanx possue conteúdo meramente informativo, e não devem ser
            consideradas recomendações jurídicas, opiniões legais, ou qualquer
            tipo de consultoria. Sua utilização do Site não cria uma relação
            entre você e o Shopbanx. 2 - As informações e textos fornecidos no
            Site são produzidos pelos integrantes do Shopbanx ou obtidos de
            fontes entendidas como confiáveis. As informações e o conteúdo dos
            links externos indicados neste site não são de responsabilidade do
            Shopbanx. As funcionalidades oferecidas no Site não asseguram a
            qualidade, autenticidade ou integridade das informações prestadas de
            sites de terceiros em nosso site. Desse modo, você deve checar a
            veracidade das informações obtidas no Site e tomar todas as medidas
            necessárias para se proteger de danos. 3 - O Shopbanx se reserva o
            direito de aperfeiçoar, corrigir e atualizar as informações
            prestadas no site e se isenta, na maior extensão permitida pela
            legislação aplicável, por quaisquer danos resultantes do uso do
            site, falha de equipamento, conexão, transmissão de dados, erros,
            interrupções, demora em sua operação, vírus de computadores, falhas
            no sistema de telecomunicações ou no provedor de conexão, bem como
            eventual incompatibilidade entre o Site e seus arquivos ou seu
            browser. 4 - Você concorda em utilizar o Site com boa-fé e
            respeitando a finalidade meramente informativa do conteúdo
            disponibilizado. Você não poderá utilizar o Site de qualquer maneira
            que possa prejudicar o seu funcionamento, inclusive, mas não
            limitado a tentativas de introdução de código malicioso, ataques de
            negação de serviço, ou abuso de qualquer defeito ou erro no Site. 5
            - Todo o conteúdo disponibilizado no Site é de titularidade única e
            exclusiva do Shopbanx. Estes Termos não concedem qualquer licença ou
            cessão de direitos de propriedade intelectual, e você não está
            autorizado a reproduzir qualquer parte do Site ou de seu conteúdo,
            sob pena das sanções previstas na legislação aplicável. 6 - Nós
            podemos atualizar estes Termos a qualquer momento. Quando o
            fizermos, incluiremos um aviso no topo desta página e, se as
            alterações forem substanciais, na página inicial do Site.
          </Text>
        </Flex>
      </ModalContent>
    </>
  );
};
