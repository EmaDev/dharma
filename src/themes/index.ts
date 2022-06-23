export interface Theme {
    mode: 'Dark'|'Ligth',
    palette: {
        bgColor: string;
        txtPrimary: string;
        txtAcent: string;
        purpleDark:string;
        purpleLigth:string;
    }
}

export const DarkTheme:Theme = {
    mode: 'Dark',
    palette: {
        bgColor: '#080808',
        txtPrimary: '#F3F3F3',
        txtAcent: '#8D129C',
        purpleDark: '#630C6D',
        purpleLigth: '#6D0C51'
    }
}

export const LigthTheme:Theme = {
    mode: 'Ligth',
    palette: {
        bgColor: '#E6E6E6',
        txtPrimary: '#141414',
        txtAcent: '#8D129C',
        purpleDark: '#630C6D',
        purpleLigth: '#6D0C51'
    }
}