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
            POLÍTICA DE PRIVACIDADE E PROTEÇÃO DE DADOS
          </Text>
          <Text fontSize="14px" color="content.base" mt="16px" mb="12px">
            O SHOPBANX MEIOS DE PAGAMENTOS S.A, CNPJ: 17.007.260/0001-91
            (“Shopbanx”) tem o compromisso de respeitar a sua privacidade e
            criou essa política para proporcionar a você um claro entendimento
            de como tratamos (utilizamos, guardamos, processamos,
            compartilhamos, transferimos ou de qualquer forma usamos) dados
            pessoais. POR FAVOR, RECOMENDAMOS QUE A POLÍTICA DE PRIVACIDADE
            ABAIXO SEJA LIDA COM ATENÇÃO. ELA DESCREVE COMO SÃO TRATADAS AS
            INFORMAÇÕES PESSOAIS FORNECIDAS POR VOCÊ AO ACESSAR E UTILIZAR O
            SITE (&quot;SITE&quot;) E/OU SERVIÇOS, BEM COMO AO SE INSCREVER EM
            EVENTOS PROMOVIDOS DO/PELO SHOPBANX. Para fins desta Política de
            Privacidade, &quot;Usuários&quot; ou &quot;Vocês&quot; são todos os
            indivíduos que de qualquer forma utilizam os serviços do Shopbanx.
            Este documento é parte integrante e indissociável aos Termos de Uso
            . CASO VOCÊ TENHA QUALQUER DÚVIDA SOBRE ESSA POLÍTICA DE
            PRIVACIDADE, antes de utilizá-lo ou realizar qualquer contratação,
            entre em contato conosco por meio dos nossos Canais de Contato
            disponíveis no site: Whatsapp oficial Shopbanx, Chat no portal (área
            logada do site) ou pelo email encarregado@shopbanx.com.br. Ao clicar
            em “LI E ESTOU DE ACORDO COM A POLÍTICA DE PRIVACIDADE” você estará
            concordando de forma LIVRE, EXPRESSA E INFORMADA para o tratamento
            de seus dados pessoais conforme descrito nesta Política de
            Privacidade. Caso NÃO concorde com todos os termos desta Política de
            Privacidade, você NÃO deverá acessar, utilizar, permanecer ou
            contratar qualquer serviço ou solução da Shopbanx. Você pode se
            recusar ao tratamento de seus dados pessoais. Destacamos, contudo,
            que, nesse caso, não será possível a você utilizar, permanecer ou
            contratar qualquer serviço ou solução da Shopbanx. 1. TIPOS DE
            INFORMAÇÕES COLETADAS E COMO USAMOS A INFORMAÇÃO 1.1. O Shopbanx
            pode coletar informações básicas que identifiquem você com um
            indivíduo (&quot;Dados Pessoais&quot;), tais como nome, endereço de
            e-mail, telefone e outras elencadas abaixo. Alguns dados poderão ser
            coletados quando você nos informar diretamente, através de suas
            interações com as soluções da Shopbanx ou de nossos parceiros, e
            serão tratados em conformidade com a legislação aplicável, bem como
            com a presente Política de Privacidade. 1.1.1. Dados fornecidos por
            você: Os dados pessoais podem se referir a informações submetidas
            por você, por exemplo, quando preenche o formulário para a
            solicitação de uma proposta de crédito, e podem dizer respeito a
            informações como nome, endereço, número de CPF, e-mail e telefone de
            contato. 1.1.2. Dados coletados automaticamente: Em alguns casos,
            alguns dados pessoais podem ser obtidos automaticamente em razão de
            suas interações com as soluções da Shopbanx, como, por exemplo,
            endereços de IP (Internet Protocol, conjunto de números que
            identifica o computador dos usuários), navegador utilizado, lista de
            URLs começando com um site de referência, sua atividade neste site e
            o site para o qual você sai, hora e data de acesso, cookies e
            tecnologias similares, como pixels e tags(para saber mais, leia a
            nossa POLÍTICA DE COOKIES), ações efetuadas por você durante sua
            permanência nas soluções Shopbanx, seções acessadas por você,
            informações de data e horário de suas ações e acessos, session ID,
            dispositivo móvel utilizado, se aplicável, geolocalização, câmera,
            galeria de fotos, informações sobre a sua tela e resolução, tempo
            despendido, dentre outras informações. 1.1.3. Dados fornecidos por
            parceiros. Em alguns casos, dados pessoais podem ser fornecidos por
            parceiros da SHOPBANX, e poderão dizer respeito ao seus dados
            cadastrais (nome, endereço, CPF). 1.2. Nós tratamos os dados
            pessoais do Usuário para as seguintes finalidades: • garantir a
            experiência como Usuário de nossos serviços; • para a execução dos
            serviços da Shopbanx; • para nos comunicarmos; • para identificar e
            disponibilizar conteúdo relevante para você e lhe enviar comunicados
            institucionais, newsletter, convites, materiais de eventos
            produzidos e/ou patrocinados, Se você for um candidato a uma vaga de
            emprego, poderemos coletar, armazenar os seus dados para entrar em
            contato e realizar entrevistas de emprego com você; • pesquisas de
            feedback de clientes; • identificação e prevenção de eventuais
            ameaças de segurança e ou de ilícitos; • formação de base de dados
            da Shopbanx, podendo incluir os dados dentre os ativos da Shopbanx
            para todos e quaisquer fins comerciais., inclusive para fins de
            reestruturação societária, como fusão, cisão ou incorporação ou
            qualquer outra forma de alienação de ativos; • cruzá-los ou
            enriquecê-los com outros dados que já estejam em posse da Shopbanx,
            ou que venham a ser obtidos e incluídos em nossos sistemas; • criar
            perfis demográficos, de consumo e socioeconômicos, levantar
            informações estatísticas e de mercado; • melhorar os produtos,
            serviços, algoritmos e demais soluções da Shopbanx; • criação de
            novos serviços, produtos e funcionalidades; • preparar relatórios,
            métricas e outras soluções e software de inteligência de negócios
            voltadas à Shopbanx ou a seus parceiros comerciais; • personalização
            e aprimoração dos serviços e soluções da Shopbanx e suas
            funcionalidades, com base na sua forma de utilização; e • exercício
            regular de direitos da Shopbanx, inclusive em processo judicial,
            administrativo ou arbitral. 1.2.1. O eventual uso dos dados pessoais
            para finalidades que não cumpram com essa prerrogativa será feito
            mediante notificação prévia a você, sempre que possível e razoável.
            1.3. Qual é a legitimidade do tratamento? As bases legais que
            legitimam o tratamento de seus dados pessoais são: BASE LEGAL BREVE
            EXPLICAÇÃO Consentimento as autorizações que você nos conceder nos
            termos desta Política de Privacidade (por exemplo, para enviarmos
            avisos publicitários) Cumprimento de obrigação legal ou regulatória
            quando nós ou nossos parceiros precisarmos realizar alguma atividade
            por força de lei ou regulamento (por exemplo, realizar atividades de
            prevenção à lavagem de dinheiro, ou enviar dados ficais aos órgãos
            competentes) Execução de contrato quando for necessário realizarmos
            atividades para permitir que você contrate um produto ou serviços
            por meio dos serviços e soluções Shopbanx (por exemplo, uma cotação
            ou contratação de crédito oferecido por um parceiro da Shopbanx)
            Exercício regular de direitos Pode ser necessário que tratemos os
            seus dados para nos defender em um processo judicial, administrativo
            ou arbitral, por exemplo, quando você nos demandar judicialmente
            Legítimo interesse quando necessário para atender a interesses
            legítimos nossos ou de terceiro, exceto no caso de prevalecerem
            direitos e liberdades fundamentais do titular que exijam a proteção
            dos dados pessoais, consideradas a partir de situações concretas,
            que incluem, mas não se limitam a (i) apoio e promoção de nossas
            atividades ou (ii) proteção do exercício regular de seus direitos ou
            prestação de serviços que o beneficiem, respeitadas as legítimas
            expectativas dele e os direitos e liberdades fundamentais, nos
            termos da lei Proteção de crédito Para avaliar eventual risco de
            insolvência de uma pessoa quando ela solicitar a contratação de um
            produto ou serviço por meio dos serviços e soluções Shopbanx 2.
            COMPARTILHAMENTO E TRANSFERÊNCIA DE DADOS 2.1. Para atingimento das
            finalidades indicadas acima, suas informações poderão ser
            compartilhadas com: • algumas de nossas empresas parceiras, em
            especial aquelas responsáveis pela viabilização dos serviços e
            soluções Shopbanx, como fornecedores de tecnologia, operadores
            logísticos, etc; • Com autoridades, entidades governamentais ou
            outros terceiros, para a proteção dos interesses do SHOPBANX, em
            qualquer tipo de conflito, incluindo ações judiciais e processos
            administrativos; • No caso de transações e alterações societárias
            envolvendo o SHOPBANX, hipótese em que a transferência das
            informações será necessária para a continuidade dos serviços; ou, •
            Mediante ordem judicial ou pelo requerimento de autoridades
            administrativas que detenham competência legal para a sua
            requisição. 2.2. Para a operacionalização de seus serviços, o
            SHOPBANX utiliza-se da parceria com empresas localizadas dentro e
            fora do Brasil. Nesse último caso, haverá uma transferência
            internacional de dados, o que será necessário para fins de
            viabilizar o seu acesso, utilização e contratação de serviços e
            soluções Shopbanx. 2.3. Por quanto tempo manteremos seus dados? Os
            dados pessoais coletados serão mantidos enquanto (i) a relação
            contratual for mantida, (ii) a exclusão não for solicitada por você
            e/ou (iii) eles não puderem ser eliminados por serem necessários
            (iii.a) para o cumprimento de uma obrigação legal ou para (iii.b) a
            formulação, exercício e defesa de reivindicações. Se Você revogar
            seu consentimento ou exercer o direito de exclusão, seus dados
            pessoais serão mantidos bloqueados durante os prazos legalmente
            estabelecidos para atender às possíveis responsabilidades
            decorrentes do tratamento dos mesmos. 3. DIREITOS DOS TITULARES 3.1.
            Os titulares de Dados Pessoais podem exercer seus direitos de: •
            confirmação da existência de tratamento; • acesso aos dados; •
            correção de dados incompletos, inexatos ou desatualizados; •
            anonimização, bloqueio ou eliminação de dados desnecessários,
            excessivos ou tratados em desconformidade com o disposto na Lei; •
            portabilidade dos dados a outro fornecedor de serviço ou produto,
            mediante requisição expressa, de acordo com a regulamentação da
            autoridade nacional, observados os segredos comercial e industrial;
            • eliminação dos dados pessoais tratados com o consentimento do
            titular, exceto nas hipóteses previstas na Lei; • informação das
            entidades públicas e privadas com as quais o controlador realizou
            uso compartilhado de dados; • informação sobre a possibilidade de
            não fornecer consentimento e sobre as consequências da negativa; •
            revogação do consentimento, nos termos da Lei; e • revisão de
            decisões individuais automatizadas. 3.2. Para exercer qualquer dos
            seus direitos acima, conforme aplicável, você deverá enviar um
            e-mail para o Encarregado de Tratamento e nós empregaremos todos os
            esforços razoáveis para atender ao seu pedido. 3.3. Caso você opte
            por não receber e-mails periódicos a respeito dos nossos serviços,
            informativos e eventos, você também poderá nos contatar por e-mail
            informando que você não deseja mais receber tais informações. Ainda,
            em todas as comunicações que enviamos para você por e-mail, sempre
            apresentamos um link que poderá requerer o descadastramento para
            deixar de receber tais comunicados e/ou informativos. Nós
            atenderemos o seu pedido e não mais enviaremos tais comunicações a
            você. Você poderá modificar a sua opção a qualquer tempo. 3.4.
            Conforme seu pedido, confirmado previamente por contato que
            realizaremos para checar a autenticidade do pedido, nós poderemos
            fornecer uma cópia de todos os seus Dados Pessoais que temos em
            nosso controle, bem como poderemos realizar a portabilidade para
            outro serviço e/ou Site se solicitado por você. 3.5. Em todos os
            casos acima, você poderá exercer seu direito de pedidos sobre seus
            dados pessoais encaminhando e-mail para o nosso Encarregado de
            Tratamento no endereço de e-mail encarregado@shopbanx.com.br. 3.6.
            Os Usuários podem, enquanto titulares de Dados Pesoais, apresentar
            uma reclamação junto à Autoridade Nacional de Proteção de Dados,
            especialmente quando não obtiverem satisfação no exercício de seus
            direitos. 3.7. Exclusão dos Dados. Os dados pessoais serão excluídos
            das bases de dados da Shopbanx mediante (a) requisição dos titulares
            dos dados pessoais ou (b) quando estes não forem mais necessários
            para os usos autorizados, salvo se houver qualquer outra razão, base
            legal ou contratual, para a sua manutenção, como (b.i) eventual
            obrigação legal de retenção de dados pessoais, (bii) necessidade de
            preservação destes para resguardo de direitos, (b.iii) interesses
            legítimos da Shopbanx ou (b.iv) em razão de ordem judicial. 3.7.1.
            Dessa forma, A SHOPBANX SE RESERVA O DIREITO DE ACESSAR, LER,
            PRESERVAR E DIVULGAR QUAISQUER DADOS NECESSÁRIOS PARA: CUMPRIR UMA
            OBRIGAÇÃO LEGAL OU UMA ORDEM JUDICIAL EMANADA DE AUTORIDADES
            COMPETENTES; FAZER CUMPRIR E APLICAR OS TERMOS DE USO E OUTROS
            ACORDOS FIRMADOS COM VOCÊ, CASO APLICÁVEL; PROTEGER OS DIREITOS,
            PROPRIEDADE E SEGURANÇA DA SHOPBANX E/OU DE SEUS PARCEIROS, E SEUS
            RESPECTIVOS REPRESENTANTES, PRESTADORES DE SERVIÇOS, COLABORADORES E
            USUÁRIOS. 3.7.2. Caso você solicite a exclusão de seus dados, por
            favor, saiba que algumas funcionalidades dos serviços ou soluções
            Shopbanx podem ficar indisponíveis. Caso você decida por acessar ou
            de qualquer forma interagir novamente com os serviços ou soluções
            Shopbanx após a solicitação da exclusão dos seus dados, seus dados
            poderão ser objeto de uma nova coleta. 4. COMUNICAÇÕES 4.1. Se você
            estiver preocupado com a finalidade para a qual nós usamos seus
            dados pessoais, por favor, envie um e-mail para
            encarregado@shopbanx.com.br. A partir do recebimento de sua
            solicitação, confirmada a autenticidade de tal pedido por
            comunicação de checagem realizada por e-mail, responderemos suas
            dúvidas e necessidades em até 30 (trinta) dias, indicando as medidas
            tomadas ou apresentando as justificativas em casos de não podermos
            atender seus pedidos por questões legais. 4.2. Quaisquer outras
            dúvidas, críticas, sugestões e/ou reclamações poderão ser realizadas
            pelo mesmo endereço de e-mail. 5. SEGURANÇA 5.1. Temos um
            compromisso com a segurança dos seus Dados Pessoais e tomamos
            precauções razoáveis para manter essa proteção. O Shopbanx emprega
            sistemas de segurança e procedimentos técnicos, físicos e gerenciais
            adotando boas práticas aplicadas no mercado para proteger seus Dados
            Pessoais. 5.1.1. Ainda que a Shopbanx mantenha essas medidas, você
            deve manter em segurança suas informações, bem como se utilizar
            apenas de ambiente e equipamentos seguros para realizar as conexões
            necessárias. 6. WEBSITES DE TERCEIROS 6.1. Como um recurso para os
            nossos Usuários, podemos fornecer links para outros sites na
            Internet. O Shopbanx não se responsabiliza por esses websites e
            conteúdos e, ainda, não compartilham, subscrevem, monitoram, validam
            ou aceitam a forma como esses websites ou ferramentas de
            armazenamento de conteúdo coletam, processam e transferem suas
            informações pessoais e privadas. Recomendamos que você consulte as
            respectivas políticas de privacidade de tais websites para se
            informar adequadamente a respeito do uso de suas informações
            pessoais por outros websites ou outras ferramentas. 7. ALTERAÇÕES A
            ESTA POLÍTICA DE PRIVACIDADE 7.1. O Shopbanx pode modificar essa
            Política de Privacidade, com revisões que poderão ocorrer com
            periodicidade anual ou mesmo, conforme as alterações legislativas ou
            procedimentais com relação ao tratamento de dados pessoais. 7.2. Nós
            recomendamos que você reveja essa página periodicamente para
            garantir que concorda com as eventuais modificações. 7.3. Ao
            continuar a usar o Site e/ou nossos serviços, você concorda em estar
            vinculado a esta Política de Privacidade conforme alterada. Caso as
            alterações a essa Política de Privacidade sejam significativas,
            poderemos solicitar um consentimento como condição à sua contínua
            utilização do Site e/ou nossos serviços. 8. OUTRAS INFORMAÇÕES 8.1.
            A falta de apresentação de informações indicados como obrigatórias
            pela Shobanx ou a sua inclusão de forma incorreta poderá
            impossibilitar a contratação e utilização dos serviços e soluções
            Shopbanx. 8.1.1. Você é o único e exclusivo responsável pela
            veracidade e precisão das informações que nos fornecer, sob pena de
            responder nos termos da lei pelos prejuízos que venham a ser
            causados à Shopbanx e/ou a terceiros. 8.2. Em nenhuma circunstância
            a Shopbanx ou qualquer de seus parceiros ou fornecedores poderão ser
            responsabilizados por qualquer delito, negligência, descumprimento
            contratual ou outra hipótese de ilícito civil ou penal que venham a
            ser causados por você, sendo de sua total responsabilidade arcar com
            todos e quaisquer danos, monetários ou de outra natureza,
            decorrentes de sua atuação indireta, direta ou incidental, cabendo à
            Shopbanx o direito de regresso por tais situações. 8.3. Essa
            Política de Privacidade é regida pelas Leis da República Federativa
            do Brasil. 8.4. Essa Política de Privacidade entra em vigor em 12 de
            dezembro de 2022.
          </Text>
        </Flex>
      </ModalContent>
    </>
  );
};
