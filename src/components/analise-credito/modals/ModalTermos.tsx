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
            Estes Termos e Condições Gerais de Uso (&quot;Termos de Uso&quot;),
            conjuntamente com os demais documentos disponíveis em
            www.shopbanx.com.br (“Site”), descrevem as regras para utilização do
            conteúdo e serviços disponibilizados pelo Site e demais Aplicações
            (conjuntamente denominados “Plataforma”) mantidas pela SHOPBANX
            MEIOS DE PAGAMENTOS S.A, sociedade anônima, com sede na Avenida
            Brigadeiro Faria Lima, 1912, 17º andar, Edf. Call Center II,
            regularmente inscrita no CNPJ/MF sob o nº 17.007.260/0001-91
            (“Shopbanx”). Ao utilizar a Plataforma o Cliente automaticamente
            concorda com as regras estabelecidas, assumindo responsabilidade
            pelos atos praticados por todas as pessoas que lhe são relacionadas.
            No caso de discordância com qualquer das condições destes Termos de
            Uso, o Cliente não deverá utilizar a Plataforma. A Shopbanx poderá
            alterar estes Termos de Uso a qualquer momento, sendo que, se isto
            vier a ocorrer, enviará ao Cliente notificação a respeito das
            alterações realizadas. As regras anteriores às alterações seguirão
            vigentes por (30) dias, contados da data de comunicação da
            alteração, período em que o Cliente deverá analisar as novas
            disposições e, sendo o caso, enviar para a Shopbanx solicitação de
            esclarecimentos. Havendo discordância com as novas regras, o Cliente
            deverá interromper imediatamente a utilização da Plataforma e a
            relação com a Shopbanx e com os Parceiros Shopbanx, conforme
            definidos nestes Termos de Uso, será rescindida de pleno direito.
            Passado o período de (30) dias da realização da alteração, a
            continuidade na utilização da Plataforma pelo Cliente será tida como
            aceite e concordância com as novas regras. 1. Definições.
            Aplicações: são aplicações de internet (tais como Site ou aplicativo
            móvel) ou outras ferramentas disponibilizadas pela Shopbanx para que
            o Cliente possa ter acesso a certas Funcionalidades da Plataforma;
            Canais de Comunicação: canais oficiais para comunicação entre a
            Shopbanx e o Cliente, para temas referentes ao uso da Plataforma e
            de suas Funcionalidades, que incluem, mas não se limitam, a
            comunicações via e-mail, notificações via SMS, WhatsApp e push no
            aplicativo, telefone e carta registrada; Cliente: pessoa física ou
            pessoa jurídica que contrata os serviços oferecidos pela Shopbanx,
            prestados diretamente por ela ou pelos Parceiros Shopbanx, cujo
            acesso ocorre por meio da Plataforma e, assim, passa a poder
            usufruir das Funcionalidades fornecidas pela Shopbanx; Dados
            Pessoais: são os dados relativos a uma pessoa natural (pessoa
            física) identificada ou identificável e poderão estar relacionados a
            Clientes pessoa física, Pessoas Relacionadas, Usuários, dentre
            outros; Dados Corporativos: são os dados relativos aos Clientes,
            pessoas jurídicas, independentemente da forma de sua constituição,
            que incluem, mas não se limitam, a suas informações cadastrais e
            eventuais informações transacionais à quais a Shopbanx venha a ter
            acesso; Funcionalidades: produtos e serviços oferecidos ao Cliente
            pela Shopbanx; 2 Mecanismos de Segurança: são os dados de login,
            senhas ou quaisquer outros tipos de mecanismos solicitados pela
            Shopbanx aos Usuários para conceder acesso à Plataforma e permitir a
            utilização dos serviços Shopbanx; Parceiros Shopbanx: empresas que
            prestam serviços financeiros, de pagamentos e correlatos, que são
            oferecidos aos Clientes pela Shopbanx, na qualidade de
            intermediadora de negócios; Pessoa Relacionada: qualquer pessoa
            física ou jurídica relacionada ao Cliente ou à Shopbanx, seja ela,
            representante legal, procurador, sócio, acionista, quotista,
            colaborador (empregado ou prestador de serviços), conselheiro,
            investidor ou qualquer terceiro que, de qualquer forma, possua
            relação ou poder de influência, direta ou indireta com atos de
            administração do Cliente ou da Shopbanx ou, ainda, pessoas que
            possam, direta ou indiretamente, beneficiar-se das decisões dos atos
            de administração do Cliente ou da Shopbanx; Plataforma: plataforma
            multifuncional disponibilizada pela Shopbanx, que engloba o Site e
            aplicativos, de acesso gratuito, que permite ao Cliente contratar e
            administrar serviços ofertados pela Shopbanx, por si mesma ou em
            conjunto com os Parceiros Shopbanx; Política de Privacidade:
            documento que define regras, princípios e diretrizes do compromisso
            da Shopbanx com a segurança e a privacidade dos Dados Pessoais de
            seus Clientes e dos Usuários da Plataforma, e descreve como, quais e
            os motivos pelos quais os Dados Pessoais são tratados e a finalidade
            destes tratamentos, além de definir como os Usuários podem exercer
            seus direitos previstos na legislação aplicável às atividades da
            Shopbanx; Recebíveis: direitos creditórios, de titularidade do
            Cliente, perante credenciadoras e/ou subcredenciadoras, oriundos de
            vendas de produtos ou serviços pagas com cartões de crédito ou
            débito; e Usuários: quaisquer Pessoas Relacionadas ao Cliente que
            fazem uso da Plataforma em seu nome. 2. Serviços Shopbanx 2.1. A
            Shopbanx oferta a seus Clientes, diretamente ou por meio dos
            Parceiros Shopbanx, uma série de serviços financeiros e de
            pagamento, entre outros, sempre sujeito a contratação específica e,
            conforme o caso, à aceitação de instrumentos contratuais
            complementares a estes Termos de Uso. 2.2. Ao aceitar estes Termos
            de Uso, o Cliente declara que possui interesse em receber ofertas da
            Shopbanx e/ou dos Parceiros Shopbanx, referentes aos produtos e
            serviços descritos acima, e autoriza a Shopbanx a compartilhar seus
            Dados Corporativos com os Parceiros Shopbanx e utilizá-los para
            ações de marketing e oferta de referidos produtos e serviços, sempre
            que a Shopbanx, a seu exclusivo critério, entender que são adequados
            ao perfil do Cliente. 2.2.1. Caso não deseje receber ofertas da
            Shopbanx e/ou dos Parceiros Shopbanx, referentes aos produtos e
            serviços descritos acima, o Cliente poderá se descadastrar das
            listas de e-mail de marketing por meio de 3 opção disponibilizada
            para tanto ao final do texto de e-mail, desautorizando, assim, o
            envio de novos conteúdos e materiais a partir daquele momento.
            Adicionalmente, o Cliente poderá manifestar sua discordância em
            relação ao recebimento de tais ofertas por meio da Plataforma. 2.3.
            Sem prejuízo de outros produtos e serviços, o Cliente manifesta, de
            forma específica, o interesse em receber ofertas referentes a
            operações de antecipação de Recebíveis mediante cessão definitiva de
            direitos. Ao utilizar o serviço de pagamento com recebíveis, o
            Usuário expressamente autoriza e reconhece que a Shopbanx poderá
            compartilhar informações dos Dados Corporativos com a Marvin
            Soluções em Serviços de Tecnologia Ltda. (“Marvin”), inscrita no
            CNPJ/ME sob o nº 41.240.161/0001-30, empresa titular dos direitos do
            software/plataforma digital (“Software” ou “Plataforma Digital
            Marvin”), que tem por escopo facilitar a consulta de informações
            sobre Recebíveis, na medida em que tal compartilhamento de
            informações seja necessário para a viabilização do referido serviço.
            O Cliente declara estar ciente de que em razão da parceria
            estabelecida entre a Shopbanx e a Marvin, ao acessar a plataforma
            Shopbanx, o Usuário autoriza a Marvin a acessar as agendas de
            Recebíveis do(s) seu(s) respectivo(s) estabelecimento(s)
            comercial(is). 2.3.1. Para os fins da cláusula acima, a Shopbanx
            poderá realizar a consulta de informações por conta própria ou por
            meio de outros parceiros escolhidos por ela a seu exclusivo
            critério. 2.3.2. Para fins destes Termos de Uso, a agenda de
            Recebíveis do Cliente é o demonstrativo de todos os Recebíveis do
            Cliente por transações realizadas que serão liquidadas com
            credenciadoras e/ou subcredenciadoras com as quais o Cliente tem
            relacionamento, incluindo histórico de vendas, valores a receber e
            Recebíveis livres para serem objeto de operação de antecipação.
            2.3.3. O Cliente desde já autoriza a Shopbanx ou seus parceiros a
            realizarem os atos necessários para a gestão e movimentação de seus
            Recebíveis, inclusive de maneira recorrente sem a necessidade de
            autorizações específicas, conforme os serviços contratados na
            Plataforma. 2.3.4. Caso deseje, o Cliente poderá, por meio da
            Plataforma, comunicar à Shopbanx o interesse em cancelar as
            autorizações previstas na cláusula 2.3 e seus subitens acima – neste
            caso, o Cliente não receberá mais ofertas da Shopbanx e/ou dos
            Parceiros Shopbanx referentes a operações de antecipação de
            Recebíveis mediante cessão definitiva de direitos. 2.4.
            Adicionalmente, o Cliente manifesta, de forma específica, o
            interesse em receber ofertas referentes a operações crédito e
            autoriza a Shopbanx e/ou os Parceiros Shopbanx a realizar análise de
            crédito, sendo expressamente autorizada não só a utilização dos
            Dados Corporativos fornecidos pelo Cliente, mas também a obtenção de
            dados adicionais mediante a consulta 4 a bancos de dados públicos e
            privados, para reunião das informações necessárias à execução de tal
            análise. 2.4.1. Especificamente, o Cliente autoriza que a Shopbanx
            e/ou os Parceiros Shopbanx consultem suas informações constantes no
            Sistema de Informações de Crédito (“SCR”) do Banco Central do
            Brasil, a qualquer tempo, mesmo após a eventual rescisão da relação
            entre Cliente e Shopbanx decorrente da aceitação destes Termos de
            Uso. 2.4.2. A autorização concedida pelo Cliente se estende às
            instituições que podem consultar o SCR nos termos da regulamentação
            vigente e que adquiram ou recebam em garantia, ou manifestem
            interesse de adquirir ou de receber em garantia, total ou
            parcialmente, operações de crédito de responsabilidade do Cliente.
            2.4.3. O SCR tem por finalidades: (i) fornecer informações ao Banco
            Central do Brasil, para fins de monitoramento do crédito no sistema
            financeiro e para o exercício de suas atividades de fiscalização; e
            (ii) propiciar o intercâmbio de informações entre instituições
            financeiras sobre o montante de responsabilidades de clientes em
            operações de crédito. 2.4.4. O Cliente poderá ter acesso, a qualquer
            tempo, aos dados do SCR pelos meios colocados à sua disposição pelo
            Banco Central do Brasil. 2.4.5. Pedidos de correções, exclusões e
            manifestações de discordância quanto às informações constantes do
            SCR, bem como solicitações de registro de anotações complementares
            (tais como demandas judiciais) deverão ser dirigidas aos canais de
            atendimento da instituição responsável pela inclusão da informação.
            2.4.6. Para obter maiores informações a respeito do SCR,
            recomenda-se que o Cliente consulte o site do Banco Central do
            Brasil, disponível no link www.bcb.gov.br. 3. Direitos da Shopbanx
            sobre a Plataforma 3.1. Titularidade. A Shopbanx é a única titular
            dos direitos de propriedade intelectual relativo ao Site, suas
            funcionalidades e todas as informações geradas e/ou desenvolvidas
            por seu negócio, incluindo, mas não limitado, ao software, conteúdo,
            desenho, domínio web, código fonte, textos, diagramas, esquemas,
            imagens, fotografias, artigos, logos, vídeos, marcas, nomes
            comerciais e qualquer informação ou conteúdo que seja produzido
            direta ou indiretamente pela Shopbanx e que possa estar incluído no
            Site, independentemente da forma de apresentação, compartilhamento
            ou armazenamento (“Conteúdo Shopbanx”). 3.1.1.1. Estes direitos são
            ativos intangíveis da Shopbanx, protegidos pela legislação nacional
            e pelos tratados internacionais vigentes, e que devem ser utilizados
            apenas para a sua finalidade autorizada, estando sujeitos a
            monitoramento e auditoria interna ou externa, a depender 5 do
            critério da Shopbanx, sem a necessidade de comunicação prévia ao
            Cliente. 3.2. Licença de Uso. Estando o Cliente sujeito a estes
            Termos de Uso, a Shopbanx lhe concede uma licença pessoal, limitada,
            temporária, não exclusiva, intransferível e não-sublicenciável para
            utilizar a Plataforma (inclusive de qualquer Aplicação eventualmente
            disponível para download ou acessível por qualquer outro meio) e
            usufruir de suas Funcionalidades, observadas as condições previstas
            nestes Termos de Uso, pelo período de duração da relação do Cliente
            com a Shopbanx. A autorização aqui concedida não permite a
            exploração comercial da Plataforma. A suspensão ou o cancelamento do
            acesso à Plataforma, por qualquer motivo, implica a suspensão ou
            cancelamento desta licença. 3.3. Restrição de Uso. O Conteúdo
            Shopbanx é protegido pela legislação de direitos de propriedade
            intelectual, incluindo direitos autorais, direitos de propriedade
            industrial, dentre outros direitos. É proibido usar, copiar,
            reproduzir, modificar, traduzir, publicar, transmitir, distribuir,
            executar, fazer o upload, exibir, licenciar, vender, explorar, fazer
            scrapping e/ou engenharia reversa do Conteúdo Shopbanx, para
            qualquer finalidade, sem o consentimento prévio e expresso da
            Shopbanx. Qualquer uso não autorizado do Conteúdo Shopbanx será
            considerado violação aos direitos de propriedade intelectual e
            acarretará a suspensão de acesso do Cliente à Plataforma e o dever
            de indenizar pelo uso indevido. Nenhuma disposição deste Termos de
            Uso configura restrição ou renúncia de quaisquer direitos da
            Shopbanx sobre a Plataforma ou o Conteúdo Shopbanx, tampouco cessão
            aos Clientes dos direitos de propriedade intelectual da Shopbanx.
            3.4. Suspensão da Plataforma. A Shopbanx reserva-se o direito de, a
            seu exclusivo critério e a qualquer tempo, alterar ou remover da
            Plataforma, total ou parcialmente, qualquer conteúdo, incluindo
            funcionalidades, sem qualquer comunicação prévia ao Cliente e sem
            que lhe seja devida qualquer indenização, sem afetar, contudo, os
            direitos do Cliente. Estão excluídos da previsão deste item os
            serviços em andamento e oferecidos na Plataforma e em andamento.
            Entretanto, tais serviços poderão ser indisponibilizados a qualquer
            tempo, por qualquer motivo e a exclusivo critério da Shopbanx (por
            exemplo, em caso de suspensão de serviços em virtude de pandemia),
            sendo certo que a Shopbanx assume o compromisso de honrar todos os
            contratos assinados na Plataforma. 3.5. Melhorias. Qualquer
            desenvolvimento, arranjo, melhoria, atualização realizada pela
            Shopbanx na Plataforma ou no Conteúdo Shopbanx, ainda que por
            sugestão ou solicitação do Cliente, serão considerados de
            titularidade desta, podendo a Shopbanx empregá-los livremente e, sem
            limitação, adaptar, aperfeiçoar, transformar, reproduzir,
            distribuir, comercializar, levar a registro, ceder e licenciar, a
            qualquer título e a seu exclusivo critério. 6 3.6. Avaliações. A
            Shopbanx é livre para usar, aplicar, modificar, publicar, reproduzir
            e comercializar quaisquer comentários, informações, ideias,
            conceitos, opiniões, técnicas e/ou quaisquer outros materiais
            contidos em qualquer comunicação que o Cliente envie à Shopbanx,
            seja por meio da Plataforma ou por outros canais de comunicação,
            incluindo, sem limitação, qualquer sugestão, solicitação de
            melhorias, recomendações oferecidas pelo Cliente à Shopbanx, sejam
            ou não relacionadas ao Conteúdo Shopbanx e/ou à Plataforma
            (&quot;Avaliações&quot;). O Cliente também cede à Shopbanx todos os
            direitos patrimoniais de propriedade intelectual relacionados às
            avaliações, de forma gratuita, irrevogável, irretratável, total,
            perpétua e global, sem que seja devido ao Cliente qualquer
            remuneração, reconhecimento, pagamento ou indenização. 4. Segurança
            da Plataforma 4.1. A Shopbanx empreende os melhores esforços para
            assegurar que a Plataforma e seu conteúdo sejam confiáveis. Contudo,
            a Shopbanx não garante a exatidão, integridade ou imparcialidade, de
            forma que o Cliente deve, se entender necessário, obter verificação
            independente das informações contidas na Plataforma. 4.2. As
            credenciais iniciais de acesso à Plataforma serão fornecidas ao
            Cliente pela Shopbanx após o aceite destes Termos de Uso e
            realização do cadastro na Plataforma. O Cliente deverá efetuar o
            login com o e-mail ou número de telefone cadastrado no primeiro
            acesso e, caso não tenha efetuado o cadastro da senha naquela
            oportunidade, receberá um token para sua criação em momento
            posterior. 4.3. O Cliente deve assegurar que os Usuários da
            Plataforma cumpram com as seguintes obrigações: i. Não compartilhar
            informações relacionadas a seu login de acesso e senhas e não
            emprestar, ceder ou transmitir seus dados de acesso a terceiros,
            assim entendido qualquer pessoa que não se encontra vinculada às
            formas de acesso à Plataforma (logins e senha), respeitando,
            portanto, as regras internas da Shopbanx de Segurança da Informação.
            ii. Conservar e guardar adequadamente os meios de acesso à
            Plataforma conforme sua natureza, especificações e restrições; iii.
            Solicitar à Shopbanx o bloqueio de acesso à Plataforma, geração de
            novo login e alteração de sua senha quando presumido que os atuais
            estejam comprometidos ou tenham sido extraviados, mediante o envio
            da documentação comprobatória; iv. Solicitar à Shopbanx a alteração
            de senha no menu “esqueci minha senha” quando presumido que a atual
            esteja comprometida, tenha sido esquecida ou extraviada; e v. Adotar
            medidas de segurança da informação próprias e adicionais adequadas,
            incluindo as aplicáveis ao aparelho eletrônico utilizado para acesso
            à Plataforma. 7 4.4. O Cliente é responsável pelo mau uso dos
            logins, senhas e Meios de Autenticação de acesso à Plataforma pelos
            seus Usuários, e deverá comunicar imediatamente à Shopbanx qualquer
            perda e comprometimento destes. 4.5. A partir de quatro horas úteis
            da comunicação à Shopbanx dos fatos descritos acima, o Cliente se
            exonera da responsabilidade civil pelo uso fraudulento dos
            Mecanismos de Segurança por terceiros, ressalvados os casos de
            comprovada culpa ou dolo do Cliente e/ou do Usuário. A não
            comunicação à Shopbanx da perda ou comprometimento de seus meios de
            acesso à Plataforma e Mecanismos de Segurança tornará de
            responsabilidade do Cliente todo e qualquer dano, perda ou prejuízo
            incorrido em decorrência de tal perda ou comprometimento. 5.
            Segurança da Informação e Tratamento de Dados 5.1. Todas as
            informações fornecidas pelo Cliente à Shopbanx são preservadas com
            base nas melhores práticas de segurança da informação, mediante a
            verificação frequente de riscos, impedimento de acesso e alteração
            de informações por pessoas não autorizadas, monitoramento do Site da
            Shopbanx, criptografia de dados, entre outras. Essas medidas possuem
            a finalidade de garantir, na medida do possível, a integridade, a
            confidencialidade e a disponibilidade das informações referentes aos
            Clientes da Shopbanx e aos seus processos internos. Para tanto, a
            Shopbanx adota medidas rigorosas de segurança da informação junto
            aos seus colaboradores, parceiros, prestadores de serviços,
            parceiros comerciais e quaisquer terceiros com quem compartilhe
            informações, observadas sempre as disposições deste documento e da
            legislação vigente. 5.2. Quando as informações obtidas dos Clientes
            ou Pessoas Relacionadas forem Dados Pessoais, a atuação da Shopbanx
            estará sujeita às regras específicas previstas na Política de
            Privacidade, que constitui parte indissociável destes Termos de Uso.
            5.2.1. Quando as informações obtidas não forem referentes a pessoas
            naturais identificadas ou identificáveis, a atuação da Shopbanx será
            de acordo com o estabelecido nestes Termos de Uso. Estas informações
            compreendem os Dados Corporativos do Cliente, que poderão ser
            utilizados pela Shopbanx apenas para atividades lícitas e atinentes
            ao escopo dos serviços oferecidos. 6. Anticorrupção, Conformidade e
            Prevenção à Lavagem de Dinheiro e Financiamento ao Terrorismo 6.1. A
            Shopbanx compromete-se a observar todas as normas legais e
            infralegais aplicáveis à disponibilização da Plataforma e de todas
            as suas Funcionalidades. 8 6.2. Da mesma forma, todos os empregados,
            Clientes, parceiros, prestadores de serviços e fornecedores da
            Shopbanx devem se portar de acordo com a legislação vigente,
            inclusive com as normas anticorrupção e de prevenção à lavagem de
            dinheiro e financiamento ao terrorismo. 6.3. Em caso de
            descumprimento da legislação vigente ou das normas internas da
            Shopbanx por empregados, Clientes, parceiros, prestadores de
            serviços ou fornecedores da Shopbanx, serão adotadas medidas
            cabíveis, incluindo a possibilidade de rescisão contratual. 7.
            Práticas Proibidas 7.1. O Cliente declara ciência de que, na
            utilização da Plataforma, é expressamente proibido: i. Ceder,
            sublicenciar, vender, doar, alienar, alugar, distribuir, transmitir
            ou transferir, total ou parcialmente, a terceiros, sob quaisquer
            modalidades, a qualquer título, bem como copiar, modificar, ampliar,
            reduzir, adaptar, traduzir, descompilar, desmontar, executar
            engenharia reversa ou de qualquer forma explorar economicamente a
            Plataforma e o Conteúdo Shopbanx, incluindo os dados e as
            informações disponibilizadas, bem como utilizá-los para finalidades
            não previstas neste Termos de Uso ou para criação ou fornecimento de
            outros produtos ou serviços concorrentes à Plataforma; ii.
            Disseminar ou instalar vírus ou qualquer outro código, arquivo ou
            software malicioso com o propósito de interromper, destruir, acessar
            indevidamente, limitar ou interferir no funcionamento ou segurança
            da Plataforma, bem como das informações, dados e equipamentos da
            Shopbanx, dos Parceiros Shopbanx, de outros Clientes da Plataforma
            ou de terceiros, ou, ainda, para qualquer outra finalidade ilícita;
            iii. Usar e acessar a Plataforma ou o Conteúdo Shopbanx ou praticar
            atos de forma que prejudiquem a sua segurança, integridade,
            disponibilidade e/ou o seu funcionamento normal; iv. Praticar atos
            que causem ou possam causar algum tipo de dano ou prejuízo à
            Shopbanx ou qualquer terceiro, que violem nossos direitos, de nossos
            parceiros, de nossos usuários, de quaisquer terceiros ou que violem
            a ordem pública; v. Utilizar a Plataforma para finalidades
            consideradas ilícitas, ilegais, fraudulentas ou prejudiciais, ou com
            relação a qualquer atividade ou propósito ilícito, ilegal,
            fraudulento ou prejudicial ou, ainda, para a prática de atos
            considerados ameaçadores, maliciosos, abusivos, ofensivos,
            difamatórios, de assédio, obscenos ou indecentes, ou que promovam o
            ódio, incitem a violência ou intolerância racial, política ou
            religiosa; vi. Remover notificações ou citações de qualquer direito
            autoral, marca registrada ou outros direitos de propriedade contidos
            na Plataforma ou em qualquer conteúdo ou outro material disponível
            nela disponíveis; 9 vii. Disponibilizar e/ou disseminar informações
            ou qualquer conteúdo não solicitado ou não autorizado, tais como
            “SPAM” ou conteúdo pertencente a terceiros e que não tenha direito
            de utilizar, tais como conteúdo protegido por direitos autorais ou
            conteúdo contendo Dados Pessoais de terceiros; viii. Criar contas de
            acesso por meios automatizados ou com pretensões falsas ou
            fraudulentas; ix. Utilizar robôs, “spider”, “crawler”, “scraper” ou
            outros meios ou interfaces automatizadas para acessar a Plataforma
            ou extrair informações de outras pessoas que utilizem Plataforma; x.
            Utilizar a Plataforma para a prática de atos que violem padrões
            éticos e morais ou as normas legais aplicáveis, sendo de todo vedada
            a distorção da finalidade dos serviços. Exemplificativamente, não
            serão permitidos a prática de atos que: (i) violem a privacidade e a
            honra ou que denigram e prejudiquem terceiros; (ii) violem direitos
            de propriedade intelectual de terceiros; (iii) tenham por objetivo
            obter o acesso ilegal a dados nossos ou de terceiros; ou (iv)
            induzam terceiros a erros; xi. Acessar a Plataforma, ou quaisquer
            dados nela contidos, de maneira não autorizada; xii. Violar a
            privacidade de outros Clientes da Plataforma; e xiii. Praticar
            qualquer ato contrário à legislação em vigor ou a este Termos de
            Uso. 8. Cancelamento do acesso à Plataforma 8.1. A Shopbanx poderá,
            a seu exclusivo critério, cancelar, bloquear ou suspender o acesso
            do Cliente à Plataforma caso o Cliente, por si ou por meio de
            qualquer de seus Usuários, independente de notificação prévia: i.
            descumpra os Termos de Uso ou qualquer outra obrigação assumida
            junto à Shopbanx e/ou aos Parceiros Shopbanx; ii. realize, ou
            mantenha relação com pessoa física ou jurídica que realize
            atividades ilegais, em violação às normas de conformidade,
            anticorrupção, prevenção à lavagem de dinheiro e combate do
            financiamento do terrorismo da Shopbanx e/ou dos Parceiros Shopbanx;
            iii. utilize, por si ou mediante terceiros, serviços da Shopbanx
            e/ou dos Parceiros Shopbanx para, de qualquer forma, obter
            benefícios ou vantagens ilícitos, fraudulentos ou que atentem contra
            as melhores práticas de mercado; iv. represente risco de qualquer
            natureza a Shopbanx e/ou aos Parceiros Shopbanx, inclusive à sua
            imagem e reputação; v. ocorra a deterioração financeira do Cliente,
            conforme apontado em pesquisas periódicas realizadas pela Shopbanx
            e/ pelos Parceiros Shopbanx; vi. forneça informações falsas durante
            o processo de cadastro ou apresente indícios de corrupção, lavagem
            de dinheiro ou financiamento ao terrorismo; 10 vii. seja
            identificada duplicidade de cadastros de titularidade de um mesmo
            CNPJ; viii. incorra em qualquer das práticas proibidas indicadas
            nestes Termos de Uso; e ix. fique mais de 60 (sessenta) dias sem
            utilizar a Plataforma. 8.2. O acesso do Cliente à Plataforma pode
            ser cancelado a qualquer momento pela Shopbanx por desinteresse
            comercial, mediante comunicação ao Cliente com, no mínimo, 30
            (trinta) dias de antecedência. 8.3. O Cliente poderá pedir o
            cancelamento de seu acesso à Plataforma a qualquer momento. Sem
            prejuízo das consequências previstas na legislação aplicável ou nos
            contratos assinados entre o Cliente e os Parceiros Shopbanx, o
            cancelamento do acesso do Cliente à Plataforma implica o
            encerramento dos serviços contratados com os Parceiros Shopbanx, não
            sendo mais possível requisitar ou usar os serviços providos pela
            Plataforma. 8.4. Em qualquer hipótese de cancelamento do acesso à
            Plataforma, o Cliente seguirá obrigado a quitar todas as obrigações
            assumidas por si ou por seus Usuários perante a Shopbanx e os
            Parceiros Shopbanx, que poderão utilizar-se de todos os meios
            admitidos em direito para cobrança dos valores que lhe forem
            devidos. 9. Responsabilidades 9.1. O Cliente é exclusivamente
            responsável pelos seus atos e omissões no uso da Plataforma, bem
            como pelos atos e omissões de seus Usuários, e deverá respeitar o
            disposto nestes Termos de Uso, na legislação aplicável, sempre de
            boa-fé e em atenção aos bons costumes. A Shopbanx não será
            responsável por qualquer dano, direto ou indireto, decorrente de mau
            uso ou inabilidade do uso da Plataforma, incluindo danos decorrentes
            do acesso por terceiros com os Meios de Autenticação. 9.2. A
            Shopbanx não oferece dispositivos de hardware, serviços de conexão à
            internet ou qualquer outro serviço técnico necessário para uso da
            Plataforma, isentando-se de qualquer responsabilidade nesse sentido.
            9.3. É de inteira responsabilidade do Cliente: i. Equipar-se e
            responsabilizar-se pelos dispositivos de hardware necessários para o
            acesso à Plataforma, bem como pela conexão destes à internet; ii.
            Manter seguro o ambiente de seus dispositivos de acesso à
            Plataforma, valendo-se de ferramentas específicas para tanto, tais
            como antivírus, firewall, entre outras, de modo a contribuir para a
            prevenção de riscos eletrônicos; iii. Utilizar navegadores e/ou,
            conforme o caso, sistemas operacionais atualizados e eficientes para
            a plena utilização da Plataforma; 11 iv. Proteger e manter em sigilo
            o seu login e Mecanismos de Segurança, inclusive senha de acesso à
            Plataforma, tendo ciência de que seu acesso à Plataforma é de uso
            pessoal e intransferível, não devendo ser compartilhado com
            terceiros em qualquer circunstância; v. Garantir que as informações
            fornecidas à Shopbanx, para fins de disponibilização e uso da
            Plataforma, são corretas, completas e verdadeiras, ficando a
            Shopbanx autorizada a adotar os procedimentos necessários para
            verificar o cumprimento desta obrigação, a qualquer momento, por si
            ou por terceiros, podendo, inclusive, a seu critério, solicitar os
            documentos que entender necessários, os quais deverão ser
            prontamente fornecidos pelo Cliente; vi. Manter referidas
            informações sempre atualizadas, responsabilizando-se por qualquer
            resultado indesejado ou prejuízo decorrente de imprecisão, equívoco
            de qualquer natureza ou falta de atualização, ressalvado que a
            Shopbanx poderá verificar, a qualquer momento, por si ou através de
            terceiros, a veracidade de tais informações e solicitar, a seu
            critério, documentos que as comprovem; e vii. Informar a Shopbanx
            sobre a mudança de quaisquer informações relativas ao Cliente, aos
            representantes legais, Usuários e quaisquer outras Pessoas
            Relacionadas, devendo realizar a atualização das informações por
            meio dos Canais de Atendimento da Shopbanx, para adequado
            cumprimento da regulamentação editada pelo BCB, e
            responsabilizando-se por toda e qualquer consequência de eventual
            omissão em relação a esta obrigação. 9.4. A Shopbanx utiliza
            serviços de terceiros, Parceiros Shopbanx, na prestação dos seus
            serviços, nos quais poderá, eventualmente, ocorrer falhas. A
            Shopbanx não será responsável por quaisquer perdas, danos (diretos
            ou indiretos) e lucros cessantes decorrentes de eventual falha dos
            serviços de terceiros, exceto quando comprovada dolo ou culpa
            exclusiva da Shopbanx por meio de sentença arbitral definitiva ou
            judicial transitada em julgado, mas, quando aplicável, manterá o
            Cliente informado sobre prazos e providências tomadas para sanar
            referida falha. 9.5. A Plataforma pode conter links que direcionam o
            Cliente para sites e outras aplicações de terceiros que não
            pertencem e não são controlados pela Shopbanx. Nesses casos, a
            Shopbanx não endossa, verifica, garante ou possui qualquer ligação
            com os proprietários desses sites ou plataformas, não sendo
            responsável pelo seu conteúdo, inclusive pelos produtos ou serviços
            disponibilizados, precisão, veracidade e completude das informações,
            políticas, práticas ou opiniões expressas em qualquer desses sites e
            plataformas de terceiros com os quais o Cliente interaja por meio da
            Plataforma. Tais fatores serão regulados pelos Termos de Uso de cada
            plataforma destes terceiros. 9.6. A Shopbanx não se responsabiliza
            por falhas de acesso ou navegação na Plataforma decorrentes de
            circunstâncias alheias ao seu controle, como 12 erros, interrupções
            ou suspensões de conexão, falha no sistema de telecomunicações,
            falha técnica de qualquer natureza, vírus no software do Cliente,
            paralisações emergenciais ou programadas para manutenção,
            atualização e ajustes de configuração da Plataforma. 9.7. A
            Shopbanx, os Parceiros Shopbanx, empreendedores, empregados ou
            colaboradores não serão, em hipótese alguma, responsabilizados por
            danos, diretos ou indiretos, que resultem de, ou que tenham relação
            com o acesso ou uso que o Cliente fizer da Plataforma ou com a sua
            incapacidade de acessar ou utilizar a Plataforma. 9.8. Em caso de
            infração pelo Cliente a esses Termos de Uso, de Lei ou de quaisquer
            direitos da Shopbanx ou terceiros a ela relacionados, o Cliente
            responderá por todas as perdas, danos e prejuízos, diretos ou
            indiretos, a que der causa. O Cliente compromete-se a indenizar a
            Shopbanx pelos dados causados, inclusive nos casos de demandas
            promovidas por outros Clientes ou terceiros. 9.9. Considerando as
            características inerentes ao ambiente da internet, o Cliente
            reconhece que a Shopbanx não é responsável por falhas na Plataforma
            decorrentes de circunstâncias alheias ao seu controle, ocasionadas
            ou não por caso fortuito ou força maior, incluindo, mas não se
            limitando a: informações perdidas, incompletas, inválidas ou
            corrompidas; intervenções de hackers e software maliciosos; falhas
            técnicas de qualquer tipo, incluindo, falhas no acesso ou na
            navegação da Plataforma decorrentes de falhas na internet em geral,
            quedas de energia, mau funcionamento eletrônico e/ou físico de
            qualquer rede, interrupções ou suspensões de conexão e falhas de
            software e/ou hardware do titular; paralisações programadas para
            manutenção, atualização e ajustes de configuração das Aplicações;
            qualquer falha humana de qualquer outro tipo, que possa ocorrer
            durante o processamento das informações, eximindo-se de qualquer
            responsabilidade proveniente de tais fatos e/ou atos. 10.
            Disposições Gerais 10.1. A Shopbanx poderá utilizar marcas e
            denominações sociais do Cliente com a finalidade de composição de
            portfólio de Clientes, bem como os feedbacks recebidos de seus
            Clientes a respeito de seu produto, podendo estes estarem incluídos
            em meios de divulgação da Shopbanx, tais como seu Site, páginas em
            mídias sociais como Instagram, Facebook e LinkedIn, apresentações
            comerciais para potenciais Clientes, entre outros. 10.2. A Shopbanx,
            por si ou por terceiros, poderá entrar em contato com o Cliente
            pelos canais de comunicação disponíveis na Plataforma, o que pode
            incluir: SMS, e-mail, notificações, telefone, WhatsApp, entre
            outros, para tratar de questões relacionadas ao uso da Plataforma,
            enviar ofertas de Produtos Shopbanx e solicitar avaliações, mas
            nunca para a solicitação ou alteração de senhas ou quaisquer outros
            Mecanismos de Segurança. 13 10.3. Ao aceitar os Termos de Uso, o
            Cliente concorda em receber esses comunicados, dentre outras ações
            comerciais, desde que pautadas pela boa-fé. Caso o Cliente não
            queira receber comunicação sobre ofertas e promoções, deverá
            comunicar a Shopbanx por meio dos canais pertinentes. 10.4. A
            Shopbanx não se responsabiliza por eventuais danos que o Cliente
            venha a sofrer por fraude em decorrência da divulgação, pelos
            Usuários, de informações solicitadas por telefone ou quaisquer
            outros meios de comunicação por terceiros que pretendam passar-se
            pela Shopbanx, considerando que estes dados nunca serão solicitados
            pela Shopbanx ao Cliente. 10.5. A Shopbanx se reserva o direito de
            alterar ou revisar os eventuais preços cobrados pelos serviços e
            funcionalidades, a qualquer momento e a seu exclusivo critério,
            inclusive para atribuir-lhes descontos ou reajustá-los de acordo com
            as variações econômicas de mercado. Em todo caso, tais mudanças
            serão previamente comunicadas ao Cliente, que, se não concordar com
            o reajuste de preços, poderá encerrar a relação contratual sem ônus.
            10.6. Exceto se expressamente previsto nestes Termos de Uso ou em
            outro documento escrito, o presente Termos de Uso não cria vínculo
            entre o Cliente e a Shopbanx, inclusive, sem limitação, qualquer
            parceria, joint venture, grupo econômico, associação, vínculo
            empregatício entre a Shopbanx, o Cliente e seus colaboradores,
            sócios ou Pessoas Relacionadas, ou similar. A Shopbanx permanecerá
            como entidade independente e autônoma, não tendo vínculos com
            quaisquer Clientes, a não ser aqueles previstos em nestes Termos de
            Uso ou outro instrumento contratual firmado entre as partes. 10.7. A
            Shopbanx poderá ceder os direitos e obrigações referentes aos Termos
            de Uso a empresas de seu mesmo grupo econômico ou societário, sem
            que seja devida qualquer comunicação prévia ao Cliente. 10.8. Se
            alguma disposição dos Termos de Uso for considerada inválida, a
            validade das demais disposições dos Termos de Uso não será afetada e
            estas continuarão produzindo efeitos. 10.9. A omissão ou tolerância
            da Shopbanx em exigir o estrito cumprimento das obrigações previstas
            nos Termos de Uso não constituirá, em nenhuma hipótese, novação ou
            renúncia, nem impedirá que a Shopbanx, a qualquer tempo, cobre que o
            Cliente cumpra tais obrigações. 10.10. Esses Termos de Uso são
            regidos e devem ser interpretados pelas leis da República Federativa
            do Brasil. Quaisquer controvérsias ou questões não previstas nestes
            Termos de Uso serão resolvidas pela Shopbanx e, quando aplicável,
            solucionadas pelo foro da Comarca de São Paulo/SP, com exclusão de
            qualquer outro, por mais privilegiado que seja ou venha a ser. 14
            Data da última atualização: 7 de dezembro de 2022.
          </Text>
        </Flex>
      </ModalContent>
    </>
  );
};
