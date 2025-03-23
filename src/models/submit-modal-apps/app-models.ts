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
    color: string;
}
  
// Lista de aplicaciones con sus respectivos iconos
export const appItems: AppItem[] = [
    { label: 'Linkedin', icon: logoLinkedin, color: '#0077B5' },
    { label: 'Facebook', icon: logoFacebook, color: '#3b5998' },
    { label: 'Twitter', icon: logoTwitter, color: '#1DA1F2' },
    { label: 'Instagram', icon: logoInstagram, color: '#C13584' },
    { label: 'Pinterest', icon: logoPinterest, color: '#E60023' },
    { label: 'Snapchat', icon: logoSnapchat, color: '#FFFC00' },
    { label: 'Tiktok', icon: logoTiktok, color: '#000000' },
    { label: 'Youtube', icon: logoYoutube, color: '#FF0000' },
    { label: 'Reddit', icon: logoReddit, color: '#FF4500' },
    { label: 'Whatsapp', icon: logoWhatsapp, color: '#25D366' },
    { label: 'Paypal', icon: logoPaypal, color: '#003087' },
    { label: 'Amazon', icon: logoAmazon, color: '#FF9900' },
    { label: 'Apple', icon: logoApple, color: '#A2AAAD' },
    { label: 'Google', icon: logoGoogle, color: '#4285F4' },
    { label: 'Microsoft', icon: logoMicrosoft, color: '#F25022' },
    { label: 'Github', icon: logoGithub, color: '#181717' },
    { label: 'Gitlab', icon: logoGitlab, color: '#FCA121' },
    { label: 'Bitbucket', icon: logoBitbucket, color: '#0052CC' },
    { label: 'Docker', icon: logoDocker, color: '#2496ED' },
    { label: 'Appstore', icon: logoAppleAppstore, color: '#0D96F6' },
];

/* app-models.ts */