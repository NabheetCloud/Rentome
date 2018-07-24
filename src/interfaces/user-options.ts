
export interface UserOptions {
    email: string,
    password: string
  }
  export interface RegisterOptions {
    name: string,
    email: string,
    password:string,
    repeatPassword:string,
    currency:string,
    genomeuser:string
  }
  export interface AddProperty {
    description: string,
    location: string,
    rent: string,
    alcohol: boolean,
    smoking: boolean,
    gambling: boolean,
    anger: boolean,
    depression: boolean,
    openness: boolean,
    score: any,
    userid: string

  }
  export interface AddProperty {
    description: string,
    location: string,
    rent: string,
    alcohol: boolean,
    smoking: boolean,
    gambling: boolean,
    anger: boolean,
    depression: boolean,
    openness: boolean,
    score: any,
    userid: string

  }
    export interface UserSettingOptions {
      name: string,
      email: string,
      currentPassword:string,
      newPassword:string,
      repeatPassword:string
      }
      export interface SearchOptions {
        title:string,
        fromdate:string,
        todate:string,
        tags:string
        }
        export interface MenuOptions {
          name:string,
          email:string
          }
      