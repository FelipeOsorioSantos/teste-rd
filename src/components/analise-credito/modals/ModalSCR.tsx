import React from 'react';
import { Flex, ModalContent, ModalOverlay, Text } from '@chakra-ui/react';
import { DynamicIcon } from '../../DynamicIcon';
import { useWindowSize } from '../../../hooks/useWindowSize';

interface ModalSCRProps {
  onClose?: () => void;
}

export const ModalSCR = ({ onClose }: ModalSCRProps) => {
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
            AUTORIZAÇÃO PARA CONSULTA AO SCR, REGISTRADORAS E A BUREAUS DE
            CRÉDITO
          </Text>
          <Text fontSize="14px" color="content.base" mt="16px" mb="12px">
            Por meio da presente, autorizo a NEXOOS SOCIEDADE DE EMPRESTIMO
            ENTRE PESSOAS S.A., instituição financeira devidamente autorizada
            pelo Banco Central do Brasil (“BCB”) para intermediar empréstimos
            entre pessoas (“NEXOOS SEP”) e NEXOOS DO BRASIL TECNOLOGIA E
            SERVIÇOS LTDA., correspondente bancário e empresa de tecnologia
            focada em análise de crédito (“NEXOOS TEC”) a consultar, na
            frequência desejada, (i) nos termos da Resolução CMN nº 4.571, de 26
            de maio de 2017, conforme alterada, os débitos e responsabilidades
            decorrentes de operações com características de crédito e as
            informações e os registros de medidas judiciais que em meu nome
            constem ou venham a constar do Sistema de Informações de Crédito
            (“SCR”), gerido pelo BCB, ou dos sistemas que venham a
            complementá-lo ou a substituí-lo no futuro e que atendam a
            propósitos análogos ao do SCR; (ii) consultar informações relativas
            a sua agenda de recebíveis, conforme o caso, em quaisquer sistemas
            de registro geridos por registradoras, nos termos da Resolução CMN
            nº 4.734 e da Circular do BCB nº 3.952, ambas de 27 de junho de
            2019, incluindo, mas não se limitando, ao Sistema CERC, Sistema
            CRDC, Sistema CSD BR, Sistema de Registro da TAG IMF, e outros que
            sejam autorizados e/ou venham a ser autorizados pelo BCB como
            registadora, assim como qualquer informação referente ao registro de
            existência, negociação ou outorga em garantia de meus recebíveis de
            arranjos de pagamento integrantes do Sistema de Pagamentos
            Brasileiro, servindo a presente como autorização para a referida
            consulta na forma prevista no art. 10, III, da referida Circular; e
            (iii) dívidas, eventuais débitos e responsabilidades e dados
            cadastrais disponíveis nas bases de dados dos serviços de proteção
            ao crédito, incluindo, mas não se limitando, à Serasa Experian, Boa
            Vista Serviços – SCPC, Quod, SCP Brasil e DPS, assim como outras
            bases públicas e privadas disponíveis ao público em geral. As
            informações a serem consultadas se referem ou podem se referir,
            ainda, a quaisquer empresas e/ou entidades do grupo econômico da
            qual a empresa que represento pertence ou, ainda, seus os sócios e
            demais representantes legais. Adicionalmente, nos termos do artigo
            1º, parágrafo 3º, inciso V da Lei Complementar nº 105, de 10 de
            janeiro de 2001, autorizo a NEXOOS SEP e NEXOOS TEC a revelarem as
            informações constantes das pesquisas a potenciais investidores da
            Plataforma Nexoos, potenciais credores em operações de empréstimo
            entre pessoas, com finalidade e o uso dessas informações para a
            avaliação de solicitação de crédito nesta modalidade por esses
            terceiros, bem como para os investidores terceiros em geral nos
            casos de operações de antecipação de recebíveis e outras de natureza
            financeiras originadas pela NEXOOS SEP e NEXOOS TEC. Em relação
            especificamente ao SCR, estou ciente de que: o SCR tem por
            finalidades (a) prover informações ao BCB para fins de monitoramento
            do crédito no sistema financeiro e para o exercício de suas
            atividades de fiscalização, e (b) propiciar o intercâmbio de
            informações entre as instituições financeiras integrantes do sistema
            financeiro nacional sobre o montante de responsabilidades de
            clientes em operações de crédito, com o objetivo de subsidiar
            decisões de crédito e de negócios; o SCR é alimentado mensalmente
            pelas instituições financeiras, mediante coleta de informações sobre
            operações concedidas com responsabilidade igual ou superior a
            R$200,00 (duzentos reais), vencidas e vincendas, bem como valores
            referentes às fianças e avais prestados pelas instituições
            financeiras a seus clientes; poderei ter acesso aos dados constantes
            em meu nome no SCR por meio do Registrato – Extrato de Registro de
            Informações no Banco Central, um sistema que fornece gratuitamente
            informações disponíveis em cadastros administrados pelo Banco
            Central do Brasil (www.bcb.gov.br/cidadaniafinanceira/registrato);
            bem como, alternativamente, por meio das Centrais de Atendimento ao
            Público do Banco Central do Brasil, pessoalmente, ou por
            correspondência, conforme orientações disponíveis no ambiente
            virtual “Fala Conosco” do Banco Central do Brasil
            (www.bcb.gov.br/acessoinformacao/faleconosco); as informações
            remetidas para fins de registro no SCR são de exclusiva
            responsabilidade da instituição financeira, inclusive no que tange
            às inclusões, correções, exclusões, registro de medidas judiciais e
            manifestações de discordância quanto às tais informações constantes
            no sistema, sendo certo que somente a instituição financeira
            responsável pela inclusão poderá alterá-la ou excluí-la; pedidos de
            correções, exclusões e manifestações de discordância quanto às
            informações constantes do SCR deverão ser dirigidas primeiramente à
            instituição responsável pela remessa das informações, sendo certo
            que, em caso de não entendimento entre as partes, poderá ser
            registrada reclamação na Central de Atendimento ao Público do BCB,
            ou por meio de medida judicial cabível em face da instituição
            financeira responsável pelo lançamento de tais informações; a
            consulta sobre qualquer informação ao SCR depende desta minha prévia
            autorização e será realizada em nome da empresa e do sócio
            responsável legal; o consentimento por mim manifestado por meio
            deste documento pode ser revogado a qualquer momento mediante minha
            manifestação expressa endereçada à NEXOOS SEP e/ou à NEXOOS TEC, por
            procedimento gratuito e facilitado, ratificados os tratamentos de
            dados e informações realizados sob amparo do consentimento
            anteriormente manifestado enquanto não houver o meu requerimento de
            revogação. Demais informações sobre o SCR podem ser obtidas em
            consulta ao ambiente virtual do BCB (www.bcb.gov.br), ou da NEXOOS
            (www.nexoos.com.br/scr).
          </Text>
        </Flex>
      </ModalContent>
    </>
  );
};
