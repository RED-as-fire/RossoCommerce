var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"auth","loadChildren":"./features/autenticazione/autenticazione.module#AutenticazioneModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/features/autenticazione/autenticazione-routing.module.ts","module":"AutenticazioneRoutingModule","children":[{"path":"","redirectTo":"/auth/login","pathMatch":"full"},{"path":"","component":"AutenticazioneComponent","children":[{"path":"login","component":"LoginComponent"},{"path":"register","component":"RegistrazioneComponent"}]}],"kind":"module"}],"module":"AutenticazioneModule"}]},{"path":"home","loadChildren":"./features/home/home.module#HomeModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/features/home/home-routing.module.ts","module":"HomeRoutingModule","children":[{"path":"","component":"HomeComponent"}],"kind":"module"}],"module":"HomeModule"}]},{"path":"personal","loadChildren":"./features/personal/personal.module#PersonalModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/features/personal/personal-routing.module.ts","module":"PersonalRoutingModule","children":[{"path":"","component":"PersonalComponent"}],"kind":"module"}],"module":"PersonalModule"}]},{"path":"cart","loadChildren":"./features/carrello/carrello.module#CarrelloModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/features/carrello/carrello-routing.module.ts","module":"CarrelloRoutingModule","children":[{"path":"","component":"CarrelloComponent","children":[{"path":"detail","component":"DettaglioComponent"},{"path":"address","component":"IndirizzoComponent"},{"path":"edit","component":"ModificaComponent"}]}],"kind":"module"}],"module":"CarrelloModule"}]},{"path":"**","loadChildren":"./features/notfound/notfound.module#NotfoundModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/features/notfound/notfound-routing.module.ts","module":"NotfoundRoutingModule","children":[{"path":"","component":"NotfoundComponent"}],"kind":"module"}],"module":"NotfoundModule"}]},{"path":"","redirectTo":"/login","pathMatch":"full"}],"kind":"module"}]}
