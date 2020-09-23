'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">rosso-commerce documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4a8fc31bb48ba38fcb593a5c1ed1aaa3"' : 'data-target="#xs-components-links-module-AppModule-4a8fc31bb48ba38fcb593a5c1ed1aaa3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4a8fc31bb48ba38fcb593a5c1ed1aaa3"' :
                                            'id="xs-components-links-module-AppModule-4a8fc31bb48ba38fcb593a5c1ed1aaa3"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AutenticazioneModule.html" data-type="entity-link">AutenticazioneModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AutenticazioneModule-b28f69658a5fb85d3883726435fad591"' : 'data-target="#xs-components-links-module-AutenticazioneModule-b28f69658a5fb85d3883726435fad591"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AutenticazioneModule-b28f69658a5fb85d3883726435fad591"' :
                                            'id="xs-components-links-module-AutenticazioneModule-b28f69658a5fb85d3883726435fad591"' }>
                                            <li class="link">
                                                <a href="components/AutenticazioneComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AutenticazioneComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrazioneComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegistrazioneComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AutenticazioneModule-b28f69658a5fb85d3883726435fad591"' : 'data-target="#xs-injectables-links-module-AutenticazioneModule-b28f69658a5fb85d3883726435fad591"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AutenticazioneModule-b28f69658a5fb85d3883726435fad591"' :
                                        'id="xs-injectables-links-module-AutenticazioneModule-b28f69658a5fb85d3883726435fad591"' }>
                                        <li class="link">
                                            <a href="injectables/AutenticazioneFacadeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AutenticazioneFacadeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AutenticazioneRoutingModule.html" data-type="entity-link">AutenticazioneRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CarrelloModule.html" data-type="entity-link">CarrelloModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CarrelloModule-ca4de84b25a39f8f806200a41aa429ad"' : 'data-target="#xs-components-links-module-CarrelloModule-ca4de84b25a39f8f806200a41aa429ad"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CarrelloModule-ca4de84b25a39f8f806200a41aa429ad"' :
                                            'id="xs-components-links-module-CarrelloModule-ca4de84b25a39f8f806200a41aa429ad"' }>
                                            <li class="link">
                                                <a href="components/CarrelloComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarrelloComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CarrelloRoutingModule.html" data-type="entity-link">CarrelloRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-b3a812eea67b26d440ce50b0dcddb246"' : 'data-target="#xs-injectables-links-module-CoreModule-b3a812eea67b26d440ce50b0dcddb246"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-b3a812eea67b26d440ce50b0dcddb246"' :
                                        'id="xs-injectables-links-module-CoreModule-b3a812eea67b26d440ce50b0dcddb246"' }>
                                        <li class="link">
                                            <a href="injectables/HttpCommunicationsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HttpCommunicationsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-853e74d45db8e78957a5ed54490f6243"' : 'data-target="#xs-components-links-module-HomeModule-853e74d45db8e78957a5ed54490f6243"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-853e74d45db8e78957a5ed54490f6243"' :
                                            'id="xs-components-links-module-HomeModule-853e74d45db8e78957a5ed54490f6243"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotfoundModule.html" data-type="entity-link">NotfoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NotfoundModule-7fbd1db07854e7561d3f487c0a93364c"' : 'data-target="#xs-components-links-module-NotfoundModule-7fbd1db07854e7561d3f487c0a93364c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotfoundModule-7fbd1db07854e7561d3f487c0a93364c"' :
                                            'id="xs-components-links-module-NotfoundModule-7fbd1db07854e7561d3f487c0a93364c"' }>
                                            <li class="link">
                                                <a href="components/NotfoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotfoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotfoundRoutingModule.html" data-type="entity-link">NotfoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PersonalModule.html" data-type="entity-link">PersonalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PersonalModule-f809224ff74f5b5865ebc83491cf6c81"' : 'data-target="#xs-components-links-module-PersonalModule-f809224ff74f5b5865ebc83491cf6c81"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PersonalModule-f809224ff74f5b5865ebc83491cf6c81"' :
                                            'id="xs-components-links-module-PersonalModule-f809224ff74f5b5865ebc83491cf6c81"' }>
                                            <li class="link">
                                                <a href="components/PersonalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PersonalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PersonalRoutingModule.html" data-type="entity-link">PersonalRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/autenticazioneEffects.html" data-type="entity-link">autenticazioneEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CarrelloService.html" data-type="entity-link">CarrelloService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomeFacadeService.html" data-type="entity-link">HomeFacadeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PersonalService.html" data-type="entity-link">PersonalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsEffects.html" data-type="entity-link">ProductsEffects</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link">AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Products.html" data-type="entity-link">Products</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductsState.html" data-type="entity-link">ProductsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserState.html" data-type="entity-link">UserState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});