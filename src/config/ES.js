const SpanishContent = {
  navbar: {
    ctaButton: "Contacta"
  },
  cardTitle: "¡Porque te lo mereces todo!",
  cards : [
    {
      id : "1",
      url: "/offers/1",
      imgUrl: "/images/cards/box1.jpeg",
      title: "Frutox",
      text: "Detox total."
    },
    {
      id: "2",
      url : "/offers/2",
      imgUrl : "/images/cards/box2.jpeg",
      title : "Happyfull",
      text: "Una caja con gran variedad de alimentos de alta calidad."
    },
    {
      id: "3",
      url : "/offers/3",
      imgUrl : "/images/cards/box3.jpeg",
      title : "Pecado",
      text: "Toda la calidad del goce junto."
    }
  ],
  homeForm: {
    title: "¿Quieres hacer un pedido?",
    imageUrl: "/images/forms/contactUs.jpg",
    ctaButtonText: "Enviar",
    ctaPath: "/confirmation"
  },
  inputContent : {
    nameLastNameInputPlaceholder: "Nombre y apellido",
    emailInputPlaceholder: "Email",
    phoneInputPlaceholder: "Teléfono",
    messageInputPlaceholder: "Mensaje",
  },
  contactPage: {
    imgUrl: "/images/forms/contactToOrder.png",
    ctaButtonText: "Enviar",
    ctaPath: "/confirmation",
    contactParagraphTitle: "Traemos el mejor desayuno para ti o para quien quieras a la puerta de casa",
    contactParagraphText: "En Keagusto queremos proveer de un desayuno preparado con los mejores ingredientes, productos de cercanía y con todo el cariño para poder adaptarlo a una buena dieta. Además de enamorar a tus queridos con este magnífico regalo.",
  },
  frutoxOfferPage: {
    title: "¿Quieres hacer un pedido?",
    imageUrl: "/images/offers/box1.jpeg",
    ctaButtonText: "Haz tu pedido",
    ctaPath: "/confirmation",
  },
  happyfullOfferPage: {
    title: "¿Quieres hacer un pedido?",
    imageUrl: "/images/offers/box2.jpeg",
    ctaButtonText: "Haz tu pedido",
    ctaPath: "/confirmation",
  },
  pecadoOfferPage: {
    title: "¿Quieres hacer un pedido?",
    imageUrl: "/images/offers/box3.jpeg",
    ctaButtonText: "Haz tu pedido",
    ctaPath: "/confirmation",
  },
  howItWorksPage: {
    title: "Cómo funciona",
    firstParagraph: "Hay diferentes problemas habituales referentes al marketing el cual se pueden encontrar en las empresas.",
    companyIssues: [
        {
          text: "No saber explicar el producto"
        },
        {
          text: "No encontrar tu segmento de mercado"
        },
        {
          text: "Poca visibilidad del negocio"
        },
        {
          text: "No tener un plan de marketing"
        },
        {
          text: "Poco reconocimiento de Marca"
        },
        {
          text: "Creer que no se necesita Marketing"
        }
      ],
    secondParagraph: "Nuestra misión es solucionar todos estos problemas en nuestras empresas con el use metódico del diseño experimental basado en marketing y desarrollo"
  },
  teamPage: {
    teamCardTitle: "Equipo",
    teamCards : [
      {
        id : "silvia",
        imgUrl: "/images/team/silviaPic.png",
        name: "Silvia Gálvez",
        role: "Marketing expert",
        description: "Silvia está especializada en ofrecer servicios integrales, relacionados con el posicionamiento SEO en buscadores, hacer que tu web sea visible y esté bien posicionada en los motores de búsqueda, a través de SEO, Keywords o Backlinks. Además experta en diseño para realizar la mejor estrategia SEO, SEM y Social Media."
      },
      {
        id : "joan",
        imgUrl: "/images/team/joanPic.jpg",
        name: "Joan Gómez Álvarez",
        role: "Senior Software Engineer",
        description: "Joan es un experto en tecnología y desarrollo de Software. Alto conocimiento en Frontend, Backend, automatización de procesos y en seguridad informática."
      },
    ],
  },
  supportPage: {
    supportCardTitle: "Soporte",
    supportCards : [
      {
        id : "support",
        imgUrl: "/images/support/contactUsSupport.jpg",
        name: "Contáctanos",
        role: "+34649313833",
        description: "Contacta para hacer un pedido."
      }
    ],
  },
  confirmationPage: {
    confirmationCardTitle: "¡Muchas gracias!",
    confirmationCards : [
      {
        id : "confirmation",
        imgUrl: "/images/confirmation/lyanna.png",
        name: "¡Tu solicitud ha sido enviada correctamente!",
        role: "Nos pondremos en contacto pronto",
        description: "Estamos encantados y con ganas de empezar a trabajar con vosotros :)"
      }
    ],
  },
  footer: {
    heading: "Únete a nuestra comunidad",
    subheading: "Recibe contenido de valor sobre Marketing y tecnología",
    nameInputPlaceholder: "Tu nombre",
    emailInputPlaceholder: "Tu email",
    ctaSubscribe: "Subscríbete",
    aboutUsTitle: "Sobre nosotros",
    aboutUsLinks: [
      {
        text : "Cómo funciona",
        url : "/how-it-works"
      },
      {
        text : "Equipo",
        url : "/team"
      },
    ],
    contactUsTitle:"Contáctanos",
    contactUsLinks: [
      {
        text : "Contacto",
        url : "/contact"
      },
      {
        text : "Soporte",
        url : "/support"
      },
    ],
  }
}

export default SpanishContent;