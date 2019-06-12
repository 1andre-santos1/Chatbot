const Sequelize = require('sequelize');
const utilizadores = require('./models/utilizadores');

const sequelize = new Sequelize('projetofinal','root','password',{
    host: 'localhost',
    dialect: 'mysql'
});

//cria tabela de utiilizadores se não existir
var Utilizadores = sequelize.define('Utilizadores', {
        nome: Sequelize.STRING,
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        email: Sequelize.STRING
});

//inser valores na tabela utilizadores
sequelize.sync({
    force: true
}).then(function() {
    Utilizadores.bulkCreate([
    {
        nome:'Andreia Ferreira',
        username: 'admin1',
        password: '$2b$08$Fh6Y6zd4zsHP1igb15PK0.cI2O6y48jYj1zP4m6MbTylOtPKDwqk.',
        email: 'aferreira@hotmail.com'
    },
    {
        nome:'André Santos',
        username: 'admin2',
        password: '$2b$08$wklXozkQ266hgRm2y6f7KOcjZPTLdKOVTp35TbRKnbj0hmrzNVrBW',
        email: 'asantos@hotmail.com'

    }
]);
});

//criar tabela de localização
var Localizacoes = sequelize.define('Localizacoes', {
    nome: Sequelize.STRING
});

sequelize.sync({
    force:true
}).then(function(){
    Localizacoes.bulkCreate([
        {
            nome:'Tomar'
        },
        {
            nome:'Lisboa'
        },
        {
            nome:'Viseu'
        },
        {
            nome:'Porto'
        },
        {
            nome:'Coimbra'
        }
    ])
})

//Criação da tabela de Áreas 
var Areas = sequelize.define('Areas', {
    nome: Sequelize.STRING
});

//inserção de valores na tabela
sequelize.sync({
    force: true
}).then(function() {
    Areas.bulkCreate([
    {
        nome: 'Consultoria'
    },
    {
        nome:'Infraestruturas'
    },
    {
        nome:'Desenvolvimento'
    }
]);
});

//criar tabela de vagas 
var Vagas = sequelize.define('Vagas',{
        nome: Sequelize.STRING,
        descricaoCandidato: Sequelize.TEXT('long'),
        trabalhoRemoto: Sequelize.BOOLEAN,
        formacaoInic: Sequelize.BOOLEAN,
        deslocacaoPaises: Sequelize.BOOLEAN,
        turnos: Sequelize.BOOLEAN,
        area: Sequelize.INTEGER,
        localizacao: Sequelize.INTEGER

});
Areas.hasMany(Vagas, {
    foreignKey: 'area',
    onDelete: 'Cascade'

});
Localizacoes.hasMany(Vagas, {
    foreignKey: 'localizacao',
    onDelete: 'Cascade'
        
});


//inser valores na tabela vagas
sequelize.sync({
    force: true
}).then(function() {
    Vagas.bulkCreate([
    //********************************Area de Consultoria*********************************/
    {
        nome: 'System Operations & Monitoring',
        descricaoCandidato: '12º Ano em área tecnológica ou frequência académica em Tecnológia; Orientação para o cliente; Conhecimentos em Operação de Sistemas (preferencial);Conhecimentos da língua Inglesa falada e escrita; Conhecimentos da língua Castelhana falada e escrita (preferencial); Disponibilidade para turnos 24*7;',
        trabalhoRemoto: true,
        formacaoInic: false,
        deslocacaoPaises: false,
        turnos: true,
        localizacao: 2, 
        area: 1,
        data: Date.getDate
    },
    {
        nome: 'Programador Junior',
        descricaoCandidato: 'Recém-Licenciado em Engenharia Informática ou similares; Gosto pela área de programação; Boa comunicação e atitude proativa; Conhecimentos de inglês serão valorizados; Bom comunicador e orientação a cliente.',
        trabalhoRemoto: true,
        formacaoInic: true,
        deslocacaoPaises: false,
        turnos: false,
        localizacao: 1, 
        area: 1,
        data: Date.getDate
    },
    {
        nome: 'Analista Funcional Junior',
        descricaoCandidato: 'Recém-Licenciado em Engenharia Informática ou similares; Boa comunicação e atitude proativa, capacidade de definir e documentar processos; Conhecimentos de inglês serão valorizados; Bom comunicador e orientação a cliente.',
        trabalhoRemoto: false,
        formacaoInic: false,
        deslocacaoPaises: true,
        turnos: false,
        localizacao: 4, 
        area: 1,
        data: Date.getDate
    },
    {
        nome: 'Técnico de Informática/Recém-Licenciado',
        descricaoCandidato: 'Recém-Licenciado em Engenharia Informática ou similares; Interesse em técnologias IBM (iSeries; AS400) ; Bons conhecimentos Inglês; Disponibilidade',
        trabalhoRemoto: false,
        formacaoInic: false,
        deslocacaoPaises: true,
        turnos: true,
        localizacao: 3, 
        area: 1,
        data: Date.getDate
    },
    {
        nome: 'Business Intelligence (M/F)',
        descricaoCandidato: 'Formação superior em Informática, Informática de Gestão ou Engenharias; Conhecimentos de SQL/ETL (Datawarehouse); Capacidade de aprendizagem e evolução;',
        trabalhoRemoto: true,
        formacaoInic: true,
        deslocacaoPaises: true,
        turnos: false,
        localizacao: 5, 
        area: 1,
        data: Date.getDate
    },
    {
        nome: 'Consultor SAP Junior Logística',
        descricaoCandidato: 'Formação superior em Informática, Informática de Gestão ou Engenharias; Conhecimentos de SAP Logística; Experiência até 1 ano em SAP Logística; Apetência para o trabalho em equipa;',
        trabalhoRemoto: true,
        formacaoInic: false,
        deslocacaoPaises: true,
        turnos: false,
        localizacao: 4, 
        area: 1,
        data: Date.getDate
    },
    {
        nome: 'System Administrator',
        descricaoCandidato: 'Licenciatura em Engenharia Informática ou equivalente; Experiência em Administração de Sistemas Windows Server ou Linux (valorizado 3 ou mais anos de experiência); Conhecimentos em ambientes Windows Server (2003/2008/2012/2016: uma ou mais versões); Conhecimentos em ambientes Linux (Redhat/Debian/Ubuntu/SUSE: um ou mais Flavours); Conhecimentos Inglês; Conhecimento Castelhano (valorizado); Conhecimentos de redes TCP/IP;',
        trabalhoRemoto: true,
        formacaoInic: false,
        deslocacaoPaises: true,
        turnos: false,
        localizacao: 1, 
        area: 1,
        data: Date.getDate
    },
    //********************************Área de Infraestruturas******************************/
    {
        nome: 'Analista de produção Mainframe',
        descricaoCandidato: 'Implementação e manutenção de cadeias e jobs em Control-M e IWS; Implementação e manutenção de calendários em Control-M e IWS; Manutenção das rotinas e utilitários base do Control-M e IWS; Análise e customização de JCL; Análise e resolução de cancelamentos em jobs no batch rotinado; Implementação e manutenção da submissão dos processos batch via CICS; Implementação e manutenção da submissão dos processos via FTSM; Análise à performance do batch para sugestão de melhorias - Performance Tuning. ',
        trabalhoRemoto: false,
        formacaoInic: false,
        deslocacaoPaises: true,
        turnos: false,
        localizacao: 2, 
        area: 2,
        data: Date.getDate
    },
    {
        nome: 'Adminsitrador de Sistemas Windows',
        descricaoCandidato: 'Administração de Sistemas Operativos Windows 10, 8 e 7; Distribuição de software, reporting e respectivo troubleshooting através de tools como por exemplo (SCCM 2012, 2016CB, Bigfix ou outras); Patch management de segurança; instalação, testes e distribuição; Consolas de Anti-virus (Mcafee, Symantec, Microsoft, …); Criação pacotes aplicacionais unattended; Implementação de imagens e soluções desktop, (por exemplo com SCCM, MDT, Ghost) e conhecimentos em scripts (ex PowerShell); Produção e documentação de processos e procedimentos técnicos; Domínio de Inglês técnico falado e escrito;',
        trabalhoRemoto: true,
        formacaoInic: false,
        deslocacaoPaises: true,
        turnos: false,
        localizacao: 1, 
        area: 2,
        data: Date.getDate
    },
    {
        nome: 'Programador Web',
        descricaoCandidato: 'Licenciatura / Mestrado em Engenharia Informática ou Curso Técnico na área de Sistemas Informáticos; Domínios das tecnologias Web: Java, .Net, SQL , javascript; Capacidade de análise de requisitos /análise funcional e técnica;	Capacidade de Gestão dos vários pedidos.',
        trabalhoRemoto: true,
        formacaoInic: false,
        deslocacaoPaises: false,
        turnos: false,
        localizacao: 3, 
        area: 2,
        data: Date.getDate
    },
    {
        nome: 'Administrador de Sistemas',
        descricaoCandidato: "Windows Server (2003/2008/2012/2016); Linux (RedHat,Debian,Ubuntu); Conhecimentos de scripting, PowerShell; Conhecimentos comprovados de administração de sistemas Unix's - (Aix; Linux; HPUX, SunSolaris); Conhecimentos das línguas Inglesa e Castelhana falada e escrita; Conhecimentos de Redes TCP/IP;",
        trabalhoRemoto: true,
        formacaoInic: false,
        deslocacaoPaises: false,
        turnos: false,
        localizacao: 4, 
        area: 2,
        data: Date.getDate
    },
    {
        nome: 'Administrador de Sistemas Linux/Unix ',
        descricaoCandidato: 'Conhecimentos sólidos Unix/Linux (Solaris / HP-UX / AIX / VIOS / HMC; Linux RedHat / Oracle; SSH / Sudo/ Suse); Conhecimentos de Redes TCP/IP; Pró-ativo e Dinamico.',
        trabalhoRemoto: true,
        formacaoInic: false,
        deslocacaoPaises: false,
        turnos: false,
        localizacao: 1, 
        area: 2,
        data: Date.getDate
    },
    {
        nome: 'Security Access Management Technician (M/F)',
        descricaoCandidato: 'Criação / remoção e edição de user (logical groups); Reset password, gestão de ticket com SLA; Niveis de Serviço, change management, revalidações de users , gerir regras e grupos; Conhecimentos avançados em AD - active directory.',
        trabalhoRemoto: true,
        formacaoInic: false,
        deslocacaoPaises: true,
        turnos: false,
        localizacao: 5, 
        area: 2,
        data: Date.getDate
    },
    {
        nome: 'Operação de Sistemas e Monitorização',
        descricaoCandidato: '12º Ano em área tecnológica ou frequência académica em Tecnologia; Conhecimentos em Operação de Sistemas (preferencial); Conhecimentos em Operação de Sistemas mainframe (preferencial); Disponibilidade para turnos 24*7; Espírito de Equipa; Orientação para o cliente; Conhecimentos da língua Inglesa e falada e escrita;',
        trabalhoRemoto: true,
        formacaoInic: false,
        deslocacaoPaises: false,
        turnos: true,
        localizacao: 2, 
        area: 2,
        data: Date.getDate
    },
    //********************************Área de Desenvolvimento***************************/
    {
        nome: 'Software Developer-J2EE',
        descricaoCandidato: ' Experiência profissional pelo menos de menos 2/3 anos com J2EE; Experiência no desenvolvimento de aplicações para a web; Conhecimentos de Bases de Dados; Bons conhecimentos de inglês falado e escrito.',
        trabalhoRemoto: true,
        formacaoInic: false,
        deslocacaoPaises: false,
        turnos: false,
        localizacao: 1, 
        area: 3,
        data: Date.getDate
    }, 
    {
        nome: 'Analista Funcional',
        descricaoCandidato: 'Formação superior em Informática, Informática de Gestão ou Engenharias; Experiência em análise funcional, levantamento de requisitos, etc; Conhecimento na área de utilities; Mais de 5 ano experiência; Apetência para o trabalho em equipa; ',
        trabalhoRemoto: false,
        formacaoInic: false,
        deslocacaoPaises: true,
        turnos: false,
        localizacao: 4, 
        area: 3,
        data: Date.getDate
    },
    {
        nome: 'Perfil Javascript',
        descricaoCandidato: ' Formação em engenharia informática, matemática ou similar; Perfil com 2 anos de experiência em desenvolvimento em javascript, NodeJS, Frontend Frameworks CSS, HTML5; Vontade de aprender e conhecer novas tecnologias.',
        trabalhoRemoto: true,
        formacaoInic: false,
        deslocacaoPaises: false,
        turnos: false,
        localizacao: 2, 
        area: 3,
        data: Date.getDate
    }, 
    {
        nome: 'Programador',
        descricaoCandidato: 'Formação superior em Engenharia Informática ou similares; Gosto por trabalhar com tecnologias como: HTLM, JAVA, .net; PL-SQL ; BD Relacional: oracle ; Big Data: Spark, Python, HQL; Versionamento: GIT ',
        trabalhoRemoto: true,
        formacaoInic: false,
        deslocacaoPaises: false,
        turnos: false,
        localizacao: 2, 
        area: 3,
        data: Date.getDate
    },
    {
        nome: 'Analista Programador/Analista Orgânico',
        descricaoCandidato: ' Formação superior em Engenharia Informática ou similares; Gosto por trabalhar com tecnologias como: Front-end: Angular 6 (HTML, JavaScript, SCSS, nodeJS, TypeScript) , Back-end: Java SpringBoot, BD Relacional: PostreSQL, Big Data: Spark, Python, HQL; Versionamento: GIT; Gosto por trabalhar em projetos multiculturais, com equipas remotas e  com recurso a metodologias ágeis.',
        trabalhoRemoto: true,
        formacaoInic: false,
        deslocacaoPaises: true,
        turnos: false,
        localizacao: 5, 
        area: 3,
        data: Date.getDate
    }, 
    {
        nome: 'Consultores Java',
        descricaoCandidato: 'Licenciados na área de Engenharia Informática, Informática de Gestão, Sistemas de Informação; Experiência mínima de 2 anos em desenvolvimento Java/web; Excelentes capacidades de comunicação (oral e escrita) e de relacionamento interpessoal; Bom inglês falado e escrito;',
        trabalhoRemoto: false,
        formacaoInic: false,
        deslocacaoPaises: true,
        turnos: false,
        localizacao: 1, 
        area: 3,
        data: Date.getDate
    },
    {
        nome: 'Consultores .NET',
        descricaoCandidato: 'Licenciados na área de Engenharia Informática, Informática de Gestão, Sistemas de Informação; Experiência mínima de 2 anos em desenvolvimento .net c#, asp.net ou vb.net; Excelentes capacidades de comunicação (oral e escrita) e de relacionamento interpessoal; Bom inglês falado e escrito.',
        trabalhoRemoto: false,
        formacaoInic: false,
        deslocacaoPaises: true,
        turnos: false,
        localizacao: 4, 
        area: 3,
        data: Date.getDate
    },
    {
        nome: 'Product Owner',
        descricaoCandidato: 'Formação superior em Engenharia Informática ou similares; Análise funcional, levantamento de requisitos; Experiência na metodologia SCRUM;Certificação de testes funcionais de acordo com as especificações; Conhecimentos de banca, com vocação para fazer análise;',
        trabalhoRemoto: true,
        formacaoInic: false,
        deslocacaoPaises: true,
        turnos: false,
        localizacao: 3, 
        area: 3,
        data: Date.getDate
    },
    
    
]);
});

