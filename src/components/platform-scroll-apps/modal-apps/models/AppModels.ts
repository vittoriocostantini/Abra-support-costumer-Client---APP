import { logoLinkedin, 
    logoFacebook, 
    logoTwitter, 
    logoInstagram, 
    logoPinterest, 
    logoSnapchat, 
    logoTiktok, 
    logoYoutube, 
    logoReddit,
    logoWhatsapp,
    logoPaypal,
    logoAmazon,
    logoApple,
    logoGoogle,
  
    logoMicrosoft,
    logoGithub,
    logoGitlab,
    logoBitbucket,
    logoDocker,
    logoAppleAppstore,
  
  
  } from 'ionicons/icons';
// Define la interfaz para los elementos de la lista
export interface AppItem {
    label: string;
    icon: string;
  }
  
  // Lista de aplicaciones con sus respectivos iconos
  export const appItems: AppItem[] = [
    { label: 'Linkedin', icon: logoLinkedin },
    { label: 'Facebook', icon: logoFacebook },
    { label: 'Twitter', icon: logoTwitter },
    { label: 'Instagram', icon: logoInstagram },
    { label: 'Pinterest', icon: logoPinterest },
    { label: 'Snapchat', icon: logoSnapchat },
    { label: 'Tiktok', icon: logoTiktok },
    { label: 'Youtube', icon: logoYoutube },
    { label: 'Reddit', icon: logoReddit },
    { label: 'Whatsapp', icon: logoWhatsapp },
    { label: 'Paypal', icon: logoPaypal },
    { label: 'Amazon', icon: logoAmazon },
    { label: 'Apple', icon: logoApple },
    { label: 'Google', icon: logoGoogle },
    { label: 'Microsoft', icon: logoMicrosoft },
    { label: 'Github', icon: logoGithub },
    { label: 'Gitlab', icon: logoGitlab },
    { label: 'Bitbucket', icon: logoBitbucket },
    { label: 'Docker', icon: logoDocker },
    { label: 'Appstore', icon: logoAppleAppstore },
  ];

