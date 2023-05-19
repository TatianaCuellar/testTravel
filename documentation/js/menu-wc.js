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
                    <a href="index.html" data-type="index-link">test-travel documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-3a517ac215348f0ddc1d4bf746c70b7062f925120cc0efe52391c8e0a5a3d417c7edfbfdab9f227f615b3dfcef6cc24bc1bd32746d1895b95b23e47b256d3043"' : 'data-target="#xs-components-links-module-AppModule-3a517ac215348f0ddc1d4bf746c70b7062f925120cc0efe52391c8e0a5a3d417c7edfbfdab9f227f615b3dfcef6cc24bc1bd32746d1895b95b23e47b256d3043"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3a517ac215348f0ddc1d4bf746c70b7062f925120cc0efe52391c8e0a5a3d417c7edfbfdab9f227f615b3dfcef6cc24bc1bd32746d1895b95b23e47b256d3043"' :
                                            'id="xs-components-links-module-AppModule-3a517ac215348f0ddc1d4bf746c70b7062f925120cc0efe52391c8e0a5a3d417c7edfbfdab9f227f615b3dfcef6cc24bc1bd32746d1895b95b23e47b256d3043"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataModule.html" data-type="entity-link" >DataModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-f9ad91926adfe10ca69459c2712d6e1f1d031538e042b4851c68a621f0e912e070a55fbeba847c960c78702a5e1cb467a50fd6140ef0caefeef7ab00c3c2d44c"' : 'data-target="#xs-components-links-module-UiModule-f9ad91926adfe10ca69459c2712d6e1f1d031538e042b4851c68a621f0e912e070a55fbeba847c960c78702a5e1cb467a50fd6140ef0caefeef7ab00c3c2d44c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-f9ad91926adfe10ca69459c2712d6e1f1d031538e042b4851c68a621f0e912e070a55fbeba847c960c78702a5e1cb467a50fd6140ef0caefeef7ab00c3c2d44c"' :
                                            'id="xs-components-links-module-UiModule-f9ad91926adfe10ca69459c2712d6e1f1d031538e042b4851c68a621f0e912e070a55fbeba847c960c78702a5e1cb467a50fd6140ef0caefeef7ab00c3c2d44c"' }>
                                            <li class="link">
                                                <a href="components/CardBookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardBookComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalDetailBookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalDetailBookComponent</a>
                                            </li>
                                        </ul>
                                    </li>
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
                                <a href="classes/BookRepository.html" data-type="entity-link" >BookRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/BookRepositoryMapper.html" data-type="entity-link" >BookRepositoryMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetBooksUseCase.html" data-type="entity-link" >GetBooksUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/Mapper.html" data-type="entity-link" >Mapper</a>
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
                                    <a href="injectables/BookImplementationService.html" data-type="entity-link" >BookImplementationService</a>
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
                                <a href="interfaces/AuthorEntity.html" data-type="entity-link" >AuthorEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthorModel.html" data-type="entity-link" >AuthorModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BookEntity.html" data-type="entity-link" >BookEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BookModel.html" data-type="entity-link" >BookModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditorialEntity.html" data-type="entity-link" >EditorialEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditorialModel.html" data-type="entity-link" >EditorialModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseCase.html" data-type="entity-link" >UseCase</a>
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
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
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