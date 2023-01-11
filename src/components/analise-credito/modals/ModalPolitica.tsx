import { Flex, ModalContent, ModalOverlay, Text } from '@chakra-ui/react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { DynamicIcon } from '../../DynamicIcon';

interface ModalPoliticaProps {
  onClose?: () => void;
}

export const ModalPolitica = ({ onClose }: ModalPoliticaProps) => {
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
            POLÍTICA DE COOKIES
          </Text>
          <Text fontSize="14px" color="content.base" mt="16px" mb="12px">
            O SHOPBANX MEIOS DE PAGAMENTOS S.A , CNPJ : 17.007.260/0001-91
            (“Shopbanx”) tem o compromisso de respeitar a sua privacidade e
            apresentar de forma transparente como utiliza seus dados pessoais.
            Conforme declaramos em nossa política de privacidade estamos
            comprometidos em utilizar de forma segura seus dados. Por isso,
            criamos esta Política de Cookies (“Política”) com o objetivo de
            esclarecê-lo sobre o uso de cookies em nosso site que solicitamos
            que LEIA COM ATENÇÃO para entender o que são os Cookies e como
            utilizamos esta tecnologia.​ ​<br></br>1 - O QUE SÃO COOKIES ?​​
            Cookies são pequenos arquivos criados por websites que o usuário
            visita e que são armazenados no seu comutador ou dispositivo móvel.
            Dentre as utilizações, sobretudo são utilizados para fazer com que
            os websites funcionem corretamente e/ou sejam mais eficientes e,
            também para fornecer informações aos proprietários destes websites.
            Em geral, classificamos os cookies com base no tempo que estes
            arquivos permanecem disponíveis no seu computador, podendo ser um
            cookie de “sessão” que expira quando você fecha o navegador ou o
            aplicativo móvel, deixando de existir ou um cookie “persistente” que
            será mantido no seu dispositivo, mesmo depois de você feche o
            navegador ou aplicativo móvel. ​<br></br>2 - PARA QUE SERVEM OS
            COOKIES ?​​ Os cookies podem ser usados para armazenar ou recuperar
            informações do navegador de internet. Estas informações podem ser
            sobre o usuário, sobre as suas preferências ou sobre o seu
            equipamento, ajudando o website a funcionar como se espera durante a
            sua navegação, com a coleta destas características. Dentre as várias
            possibilidades de utilização os cookies proporcionam uma navegação
            nos websites com eficiência lembrando suas preferências já
            escolhidas em outros momentos que visitou o website. Ainda, ajudam a
            garantir que anúncios e outros conteúdos que você tenha demonstrado
            interesse e sejam mais relevantes para você possam serem
            direcionados automaticamente. ​ <br></br>3 - QUAIS TIPOS DE COOKIES
            UTILIZAMOS​​ Nós podemos utilizar a depender de sua autorização
            cookies para identificar o seu comportamento e assim, disponibilizar
            conteúdos e ofertas com base em suas escolhas. Contudo, nem todos os
            cookies que utilizamos possuem informações que possam identificar
            você diretamente. Abaixo, descrevemos os tipos de cookies e suas
            características: ​ cookies estritamente necessários para o
            funcionamento do website que são essenciais para que você consiga
            navegar e usar com eficácia os recursos de nossos websites. Contudo,
            neste caso não há qualquer possibilidade de identificação do
            usuário. Sem estes cookies não será possível utilizar nossos
            serviços. cookies de desempenho que nos ajudam a avaliar a
            navegabilidade e frequências de acesso de certas áreas. Todas as
            informações coletadas por esses cookies são anônimas e são usadas
            somente para melhorar o funcionamento do site. cookies de
            funcionalidade que permitem ao nosso website lembrar de escolhas
            realizadas por você quando nos visitou, armazenando seu nome de
            acesso, idioma entre outros e, desta forma, possibilitando a sua
            identificação. cookies direcionados (targeting cookies) que são
            utilizados para envio de anúncios relevantes à você, bem como
            limitar a quantidade de envio destes anúncios e realizar a medição
            de eficácia em campanhas de marketing, entendendo inclusive o seu
            comportamento quando recebem uma propaganda. Este tipo de cookie
            possibilitará sua identificação também. ​ <br></br>4 - UTILIZAMOS
            COOKIES DE TERCEIROS​​ Em nosso website utilizamos ainda cookies de
            terceiros como Google Analytics, Twitter, Hubspot, LinkedIn
            Analytics para obtermos mais análises do funcionamento de nossos
            websites. Estas ferramentas possuem códigos inseridos em nossos
            websites que coletam informações sobre as interações que você faz em
            nossos websites, como as páginas que visita, os links que clicar e o
            tempo que permanece em uma das páginas em sua visita. Para maiores
            detalhes sobre as políticas desta ferramentas sugerimos que acessem
            os sites próprios nos links de cada um deles. ​<br></br>​ 5 - POSSO
            ATIVAR OU DESATIVAR OS COOKIES ?​ Mantemos nosso compromisso e
            respeito a você para decidir sobre os cookies que possam de alguma
            forma identificar você caso utilizemos (cookies de funcionalidade e
            cookies direcionados). Para isso, disponibilizamos em nossa página
            inicial o painel de cookies para seu aceite e configuração. No caso
            dos cookies que não conseguem identificar você (cookies estritamente
            necessários e cookies de desempenho) por serem essenciais para o
            funcionamento de nossos websites não poderão ser desabilitados. Caso
            tenha dúvidas sobre as funcionalidades e utilização de cookies em
            nossos websites, você poderá nos contatar enviando um e-mail com
            quaisquer questões para o endereço encarregado@shopbanx.com.br que
            atenderemos em prazo razoável respondendo seus questionamentos
            sempre que julgar necessário.
          </Text>
        </Flex>
      </ModalContent>
    </>
  );
};
