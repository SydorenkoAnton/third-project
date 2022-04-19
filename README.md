﻿# third-project
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blanchard</title>
    <link rel="icon" href="img/favicon.ico" />
    <link rel="stylesheet" href="css/normalize.css" />
    <link
      rel="stylesheet"
      href="https://unpkg.com/simplebar@latest/dist/simplebar.css"
    />
    <link rel="stylesheet" href="css/choices.min.css"/>
    <link rel="stylesheet" href="css/swiper-bundle.min.css"/>
    <link rel="stylesheet" href="css/jquery-ui.min.css"/>
    <link rel="stylesheet" href="css/tippy.css">
    <link rel="stylesheet" href="css/style.css"/>
  </head>
  <body>
    <header>
      <div class="header__container-top">
        <div class="header__container container flex">
          <button id="burger" class="header__burger-button btn-reset">
            <div class="burger-icon">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </div>
          </button>
          <nav id="burger-menu" class="burger__menu">
            <div class="burger__block flex"  data-simplebar>
            <ul class="burger__list list-reset flex">
              <li class="burger__item">
                <a href="#" class="burger__link link">О нас</a>
              </li>
              <li class="burger__item">
                <a href="#" class="burger__link link">Галерея</a>
              </li>
              <li class="burger__item">
                <a href="#" class="burger__link link">Каталог</a>
              </li>
              <li class="burger__item">
                <a href="#" class="burger__link link">События</a>
              </li>
              <li class="burger__item">
                <a href="#" class="burger__link link">Проекты</a>
              </li>
              <li class="burger__item">
                <a href="#" class="burger__link link">Контакты</a>
              </li>
            </ul>
            <div class="burger__btn">              
              <button class="burger__btn-bottom btn-reset">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.12056 9.09278L6.13889 10.1111L9.75 6.5L6.13889 2.88889L5.12056 3.90722L6.98389 5.77778H0V7.22222H6.98389L5.12056 9.09278ZM11.5556 0H1.44444C0.642778 0 0 0.65 0 1.44444V4.33333H1.44444V1.44444H11.5556V11.5556H1.44444V8.66667H0V11.5556C0 12.35 0.642778 13 1.44444 13H11.5556C12.35 13 13 12.35 13 11.5556V1.44444C13 0.65 12.35 0 11.5556 0Z" fill="white"/>
                  </svg>
                  Войти
              </button>
              </div>  
            </div>
          </nav>
          <img  class="header__logo" src="img/logo.svg" alt="логотип" />
          <button class="header__search-top btn-reset" type="submit">
            <svg
              class="header__search"
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                class="header__search-hover"
                width="6.8678"
                height="1.71695"
                transform="matrix(-0.718931 0.695081 0.718931 0.695081 4.9375 15.6534)"
                fill="white"
              />
              <path
                class="header__search-hover"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.0969 18C7.53041 18 3.99692 14.3229 3.99692 10C3.99692 5.67715 7.53041 2 12.0969 2C16.6634 2 20.1969 5.67715 20.1969 10C20.1969 14.3229 16.6634 18 12.0969 18ZM12.0969 20C6.57408 20 2.09692 15.5228 2.09692 10C2.09692 4.47715 6.57408 0 12.0969 0C17.6198 0 22.0969 4.47715 22.0969 10C22.0969 15.5228 17.6198 20 12.0969 20Z"
                fill="white"
              />
            </svg>
          </button>
          <form class="search">
            <button class="header__btn-search-modal btn-reset">
              <svg
                class="header__search-modal"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="6.8678"
                  height="1.71695"
                  transform="matrix(-0.718931 0.695081 0.718931 0.695081 4.9375 15.6534)"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0969 18C7.53041 18 3.99692 14.3229 3.99692 10C3.99692 5.67715 7.53041 2 12.0969 2C16.6634 2 20.1969 5.67715 20.1969 10C20.1969 14.3229 16.6634 18 12.0969 18ZM12.0969 20C6.57408 20 2.09692 15.5228 2.09692 10C2.09692 4.47715 6.57408 0 12.0969 0C17.6198 0 22.0969 4.47715 22.0969 10C22.0969 15.5228 17.6198 20 12.0969 20Z"
                  fill="white"
                />
              </svg>
            </button>
            <span>
            <button class="header__btn-search-min btn-reset">
              <svg
                class="header__search-modal"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="6.8678"
                  height="1.71695"
                  transform="matrix(-0.718931 0.695081 0.718931 0.695081 4.9375 15.6534)"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0969 18C7.53041 18 3.99692 14.3229 3.99692 10C3.99692 5.67715 7.53041 2 12.0969 2C16.6634 2 20.1969 5.67715 20.1969 10C20.1969 14.3229 16.6634 18 12.0969 18ZM12.0969 20C6.57408 20 2.09692 15.5228 2.09692 10C2.09692 4.47715 6.57408 0 12.0969 0C17.6198 0 22.0969 4.47715 22.0969 10C22.0969 15.5228 17.6198 20 12.0969 20Z"
                  fill="white"
                />
              </svg>
            </button>
            <input
              class="header__form-input"
              type="text"
              placeholder="Поиск по сайту"
            />
            </span>
            <button id="btn-search-close" class="btn--close btn-reset" type="button"></button>
          </form>
          <ul class="header__list-top list-reset flex">
            <li class="header__item-top">
              <a href="" class="header__link"> О&nbsp;нас </a>
            </li>
            <li class="header__item-top">
              <a href="" class="header__link"> Галерея </a>
            </li>
            <li class="header__item-top">
              <a href="" class="header__link"> Каталог </a>
            </li>
            <li class="header__item-top">
              <a href="" class="header__link"> События </a>
            </li>
            <li class="header__item-top">
              <a href="" class="header__link"> Проекты </a>
            </li>
            <li class="header__item-top">
              <a href="" class="header__link"> Контакты </a>
            </li>
          </ul>
          <a class="header__come-link" href="">
            <svg
              class="header__come-img"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.12056 9.09278L6.13889 10.1111L9.75 6.5L6.13889 2.88889L5.12056 3.90722L6.98389 5.77778H0V7.22222H6.98389L5.12056 9.09278ZM11.5556 0H1.44444C0.642778 0 0 0.65 0 1.44444V4.33333H1.44444V1.44444H11.5556V11.5556H1.44444V8.66667H0V11.5556C0 12.35 0.642778 13 1.44444 13H11.5556C12.35 13 13 12.35 13 11.5556V1.44444C13 0.65 12.35 0 11.5556 0Z"
                fill="white"
              />
            </svg>
            <span class="header__come-descr">Войти</span>
          </a>
        </div>
      </div>
      <div class="header__container-bottom">
        <div class="header__container container flex">
          <ul class="header__list-bottom list-reset flex">
            <li class="header__item-bottom">
              <button class="header__btn-bottom btn-reset">
                Реализм
                <svg
                  id="arrow1"
                  class="header__arrow"
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 1L6 6L1 1" stroke="white" />
                </svg>
              </button>
              <div class="header__hidden">
                <div class="header__hidden-block" data-simplebar>
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-real1.png')"
                    href=""
                    ><span class="header__card-descr">Тинторетто</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-real2.png')"
                    href=""
                    ><span class="header__card-descr">Фридрих</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-real3.png')"
                    href=""
                    ><span class="header__card-descr">Леонардо</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-real4.png')"
                    href=""
                    ><span class="header__card-descr">Верроккьо</span></a
                  >
                </div>
              </div>
            </li>
            <li class="header__item-bottom">
              <button class="header__btn-bottom btn-reset">
                Импрессионизм
                <svg
                  id="arrow2"
                  class="header__arrow"
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 1L6 6L1 1" stroke="white" />
                </svg>
              </button>
              <div class="header__hidden">
                <div class="header__hidden-block" data-simplebar>
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-impr1.png')"
                    href=""
                    ><span class="header__card-descr">Моне</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-impr2.png')"
                    href=""
                    ><span class="header__card-descr">Сислей</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-impr3.png')"
                    href=""
                    ><span class="header__card-descr">Мане</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-impr4.png')"
                    href=""
                    ><span class="header__card-descr">Ренуар</span></a
                  >
                </div>
              </div>
            </li>
            <li class="header__item-bottom">
              <button class="header__btn-bottom btn-reset">
                Постимпрессионизм
                <svg
                  id="arrow3"
                  class="header__arrow"
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 1L6 6L1 1" stroke="white" />
                </svg>
              </button>
              <div class="header__hidden">
                <div class="header__hidden-block" data-simplebar>
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-post1.png')"
                    href=""
                    ><span class="header__card-descr">Ван Гог</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-post2.png')"
                    href=""
                    ><span class="header__card-descr">Сезанн</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-post3.png')"
                    href=""
                    ><span class="header__card-descr">Гоген</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-post4.png')"
                    href=""
                    ><span class="header__card-descr">Сёра</span></a
                  >
                </div>
              </div>
            </li>
            <li class="header__item-bottom">
              <button class="header__btn-bottom btn-reset">
                Авангард
                <svg
                  id="arrow4"
                  class="header__arrow"
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 1L6 6L1 1" stroke="white" />
                </svg>
              </button>
              <div class="header__hidden">
                <div class="header__hidden-block" data-simplebar>
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-avan1.png')"
                    href=""
                    ><span class="header__card-descr">Кандинский</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-avan2.png')"
                    href=""
                    ><span class="header__card-descr">Маринетти</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-avan3.png')"
                    href=""
                    ><span class="header__card-descr">Малевич</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-avan4.png')"
                    href=""
                    ><span class="header__card-descr">Пикассо</span></a
                  >
                </div>
              </div>
            </li>
            <li class="header__item-bottom">
              <button class="header__btn-bottom btn-reset">
                Футуризм
                <svg
                  id="arrow5"
                  class="header__arrow"
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 1L6 6L1 1" stroke="white" />
                </svg>
              </button>
              <div class="header__hidden">
                <div class="header__hidden-block" data-simplebar>
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-futu1.png')"
                    href=""
                    ><span class="header__card-descr">Карра</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-futu2.png')"
                    href=""
                    ><span class="header__card-descr">Прателла</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-futu3.png')"
                    href=""
                    ><span class="header__card-descr">Северини</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-futu4.png')"
                    href=""
                    ><span class="header__card-descr">Балла</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-futu1.png')"
                    href=""
                    ><span class="header__card-descr">Карра</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-futu2.png')"
                    href=""
                    ><span class="header__card-descr">Прателла</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-futu3.png')"
                    href=""
                    ><span class="header__card-descr">Северини</span></a
                  >
                  <a
                    class="header__hidden-link"
                    style="background-image: url('img/header-futu4.png')"
                    href=""
                    ><span class="header__card-descr">Балла</span></a
                  >
                </div>
              </div>
            </li>
          </ul>
          <form class="header__form">
            <button class="header__form-btn btn-reset" type="submit">
              <svg
                class="header__search-img"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="6.8678"
                  height="1.71695"
                  transform="matrix(-0.718931 0.695081 0.718931 0.695081 4.9375 15.6534)"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0969 18C7.53041 18 3.99692 14.3229 3.99692 10C3.99692 5.67715 7.53041 2 12.0969 2C16.6634 2 20.1969 5.67715 20.1969 10C20.1969 14.3229 16.6634 18 12.0969 18ZM12.0969 20C6.57408 20 2.09692 15.5228 2.09692 10C2.09692 4.47715 6.57408 0 12.0969 0C17.6198 0 22.0969 4.47715 22.0969 10C22.0969 15.5228 17.6198 20 12.0969 20Z"
                  fill="white"
                />
              </svg>
            </button>
            <input
              class="header__form-input"
              type="text"
              placeholder="Поиск по сайту"
            />
          </form>
        </div>
      </div>
    </header>
    <main>
      <section class="hero" id="hero">
        <div class="container hero__container">
          <div class="hero__block flex">
          <h2 class="hero__title">Прикоснитесь к прекрасному</h2>
          <p class="hero__descr">
            Мы&nbsp;вынуждены отталкиваться от&nbsp;того, что реализация
            намеченных плановых заданий создаёт предпосылки для новых
            предложений.
          </p>
          <a href="" class="hero__link"> Подписаться на рассылку </a>
        </div>
        </div>
      </section>
      <section class="about-us" id="about-us">
        <div class="container about-us__container">
          <h2 class="about-us__title">О нас</h2>
          <p class="about-us__descr">
            Ясность нашей позиции очевидна: семантический разбор внешних
            противодействий однозначно определяет каждого участника как
            способного принимать собственные решения касаемо распределения
            внутренних резервов и&nbsp;ресурсов. Не&nbsp;следует, однако,
            забывать, что высококачественный прототип будущего проекта влечет
            за&nbsp;собой процесс внедрения и&nbsp;модернизации модели развития.
            Повседневная практика показывает, что высокое качество позиционных
            исследований создаёт необходимость включения в производственный
            план целого ряда внеочередных мероприятий с&nbsp;учётом комплекса
            распределения внутренних резервов и&nbsp;ресурсов. В&nbsp;рамках
            спецификации современных стандартов, действия представителей
            оппозиции набирают популярность среди определенных слоев населения,
            а&nbsp;значит, должны быть разоблачены.
          </p>
        </div>
      </section>
      <section class="gallery" id="gallery">
        <div class="container gallery__container">
          <div class="gallery__block flex">
            <div class="gallery__left-part">
              <h3 class="gallary__title">Галерея</h3>
              <div class="gallery__select-block">
                <label class="gallery__selekt-label" for="style">Фильтр:</label>
                <select class="gallery__select" name="style" id="stale">
                  <option class="gallery__option" value="Живопись" selected>
                    Живопись
                  </option>
                  <option class="gallery__option" value="Рисунок">
                    Рисунок
                  </option>
                  <option class="gallery__option" value="Скульптура">
                    Скульптура
                  </option>
                </select>
              </div>
              <ul class="gallery__checkbox-list list-reset">
                <li class="gallery__checkbox">
                  <input
                    class="gallery__input custom-checkbox"
                    type="checkbox"
                    name="XIX"
                    id="XIX"
                  />
                  <label class="gallery__checkbox-label" for="XIX"
                    >XIX век</label
                  >
                </li>
                <li class="gallery__checkbox">
                  <input
                    class="gallery__input custom-checkbox"
                    type="checkbox"
                    name="XX"
                    id="XX"
                  />
                  <label class="gallery__checkbox-label" for="XX">XX век</label>
                </li>
                <li class="gallery__checkbox">
                  <input
                    class="gallery__input custom-checkbox"
                    type="checkbox"
                    name="modern"
                    id="modern"
                  />
                  <label class="gallery__checkbox-label" for="modern"
                    >Современность</label
                  >
                </li>
              </ul>
            </div>
            <div class="gallery__right-part">
              <div class="gallery__navigation">
                <button
                  class="nav-btn gallery__prev"
                  aria-label="К предыдущему слайду"
                ></button>
                <div class="gallery__pagination"></div>
                <button
                  class="nav-btn gallery__next"
                  aria-label="К следующему слайду"
                ></button>
              </div>
              <div class="swiper-container slides-container">
                <div class="swiper-wrapper">
                  <a class="swiper-slide gallery__slide" href="#">
                    <picture class="gallery__picture">
                      <source
                        srcset="
                          https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828__340.jpg
                        "
                        media="(max-width: 650px)"
                      />
                      <source
                        srcset="
                          https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg
                        "
                        media="(max-width: 950px)"
                      />
                      <source
                        srcset="
                          img/gallery1-1024.jpg
                        "
                        media="(max-width: 1400px)"
                      />
                      <img
                        class="gallery__image"
                        src="img/gallery1.jpg"
                        alt=""
                      />
                    </picture>
                  </a>
                  <a class="swiper-slide gallery__slide" href="#">
                    <picture>
                      <source
                        srcset="
                          https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828__340.jpg
                        "
                        media="(max-width: 580px)"
                      />
                      <source
                        srcset="
                          https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg
                        "
                        media="(max-width: 960px)"
                      />
                      <source
                        srcset="
                          img/gallery2-1024.jpg
                        "
                        media="(max-width: 1400px)"
                      />
                      <img
                        class="gallery__image"
                        src="img/gallery2.jpg"
                        alt=""
                      />
                    </picture>
                  </a>
                  <a class="swiper-slide gallery__slide" href="#">
                    <picture>
                      <source
                        srcset="
                          https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828__340.jpg
                        "
                        media="(max-width: 580px)"
                      />
                      <source
                        srcset="
                          https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg
                        "
                        media="(max-width: 960px)"
                      />
                      <source
                        srcset="
                          img/gallery3-1024.jpg
                        "
                        media="(max-width: 1400px)"
                      />
                      <img
                        class="gallery__image"
                        src="img/gallery3.jpg"
                        alt=""
                      />
                    </picture>
                  </a>
                  <a class="swiper-slide gallery__slide" href="#">
                    <picture>
                      <source
                        srcset="
                          https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828__340.jpg
                        "
                        media="(max-width: 580px)"
                      />
                      <source
                        srcset="
                          https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg
                        "
                        media="(max-width: 960px)"
                      />
                      <source
                        srcset="
                          img/gallery4-1024.jpg
                        "
                        media="(max-width: 1400px)"
                      />
                      <img
                        class="gallery__image"
                        src="img/gallery4.jpg"
                        alt=""
                      />
                    </picture>
                  </a>
                  <a class="swiper-slide gallery__slide" href="#">
                    <picture>
                      <source
                        srcset="
                          https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828__340.jpg
                        "
                        media="(max-width: 580px)"
                      />
                      <source
                        srcset="
                          https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg
                        "
                        media="(max-width: 960px)"
                      />
                      <source
                        srcset="
                          img/gallery5-1024.jpg
                        "
                        media="(max-width: 1400px)"
                      />
                      <img
                        class="gallery__image"
                        src="img/gallery5.jpg"
                        alt=""
                      />
                    </picture>
                  </a>
                  <a class="swiper-slide gallery__slide" href="#">
                    <picture>
                      <source
                        srcset="
                          https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828__340.jpg
                        "
                        media="(max-width: 580px)"
                      />
                      <source
                        srcset="
                          https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg
                        "
                        media="(max-width: 960px)"
                      />
                      <source
                        srcset="
                          img/gallery6-1024.jpg
                        "
                        media="(max-width: 1400px)"
                      />
                      <img
                        class="gallery__image"
                        src="img/gallery6.jpg"
                        alt=""
                      />
                    </picture>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="catalog">
        <div class="container catalog__container">
          <div class="catalog__top-part">
            <h2 class="catapog__title">Каталог</h2>
            <p class="catalog__descr">
              Акционеры крупнейших компаний, которые представляют собой яркий
              пример континентально-европейского типа политической культуры,
              будут объявлены нарушающими общечеловеческие нормы этики
              и&nbsp;морали. Являясь всего лишь частью общей картины,
              стремящиеся вытеснить традиционное производство, нанотехнологии
              и&nbsp;по&nbsp;сей день остаются уделом либералов, которые жаждут
              быть функционально разнесены на&nbsp;независимые элементы.
            </p>
          </div>
          <div class="catalog__bottom-block">
            <div class="flex">
              <div
                class="catalog__left-block tabs-artist__content active"
                data-target="artist-girlandayo"
                id="tabs-artist-btn"
              >
                <div class="catalog__left-img">
                  <picture>
                    <source
                      srcset="/img/girlandayo.jpg"
                      media=" (max-width: 1024px) "
                    />
                    <source
                      srcset="/img/girlandayo.jpg"
                      media=" (max-width: 1024px) "
                    />
                    <source
                      srcset="/img/girlandayo.jpg"
                      media=" (max-width: 1024px) "
                    />
                    <img src="img/katalog.jpg" alt="Доменико Гирландайо" />
                  </picture>
                </div>
                <h3 class="catalog__sub-title">Доменико Гирландайо</h3>
                <div class="catalog__date">2 июня 1448 — 11 января 1494</div>
                <div class="main-text catalog__bottom-descr">
                  Один из ведущих флорентийских художников Кватроченто,
                  основатель художественной династии, которую продолжили его
                  брат Давид и сын Ридольфо. Глава художественной мастерской,
                  где юный Микеланджело в течение года овладевал
                  профессиональными навыками. Автор фресковых циклов, в которых
                  выпукло, со всевозможными подробностями показана домашняя
                  жизнь библейских персонажей (в их роли выступают знатные
                  граждане Флоренции в костюмах того времени).
                </div>
              </div>
              <div
                class="catalog__left-block tabs-artist__content"
                data-target="artist-plug"
                id="tabs-artist-btn-plug"
              >
                <a id="artist-plug"></a>
                <div class="catalog__left-img">
                  <picture>
                    <img src="img/catalog-emply.png" alt="Художник заглушка" />
                  </picture>
                </div>
                <h3 class="catalog__sub-title">Что мы о нём знаем?</h3>
                <div class="main-text catalog__bottom-descr">
                  Пока ничего... Зато мы точно знаем, что в галерее есть на что
                  посмотреть!
                </div>
                <a href="#gallery" class="catalog__card-link">В галерею</a>
              </div>
              <div class="catalog__right-block" id="accordion">
                <div class="catalog__accordion-card">
                  <button class="btn-reset catalog__accordion-btn flex">
                    <h4 class="catalog__accordion-title">С 1400 по 1499 гг.</h4>
                    <svg
                      class="catalog__svg"
                      width="50"
                      height="50"
                      viewBox="-2 0 53 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="background"
                        d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
                        fill="#ECECEC"
                      />
                      <path
                        class="border"
                        d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
                        stroke="black"
                      />
                      <path
                        d="M33.3333 23.3333L25 31.6667L16.6667 23.3333"
                        stroke="black"
                      />
                    </svg>
                  </button>
                </div>
                <ul class="catalog__artists">
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Бенедетто ди Биндо</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Бергоньоне, Амброджо</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Биссоло, Франческо</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Больтраффио, Джованни</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Бонсиньори, Франческо</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Боттичини, Рафаэлло</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Брамантино</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Бреа, Людовико</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Бьяджо д’Антонио Туччи</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Веккьетта</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Андреа Верроккьо</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn"
                      class="btn-reset main-text tabs-artist-btn active"
                      data-path="artist-girlandayo"
                      >Доменико Гирландайо</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Беноццо Гоццоли</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Граначчи, Франческо</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Грегорио ди Чекко</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Джованни да Удине</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Джованни ди Паоло</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Джорджоне</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Парентино, Бернардо</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Пезеллино</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Пьетро Перуджино</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Перуцци, Бальдассаре</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Пизанелло</a
                    >
                  </li>
                  <li class="main-text catalog__artists-item">
                    <a
                      href="#tabs-artist-btn-plug"
                      class="btn-reset main-text tabs-artist-btn"
                      data-path="artist-plug"
                      >Пинтуриккьо</a
                    >
                  </li>
                </ul>
                <div class="catalog__accordion-card">
                  <button class="btn-reset catalog__accordion-btn flex">
                    <h4 class="catalog__accordion-title">С 1500 по 1599 гг.</h4>
                    <svg
                      class="catalog__svg"
                      width="50"
                      height="50"
                      viewBox="-2 0 53 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="background"
                        d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
                        fill="#ECECEC"
                      />
                      <path
                        class="border"
                        d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
                        stroke="black"
                      />
                      <path
                        d="M33.3333 23.3333L25 31.6667L16.6667 23.3333"
                        stroke="black"
                      />
                    </svg>
                  </button>
                </div>
                <div class="catalog__subartists catalog__not-ready flex">
                  <div class="catalog__not-ready-img">
                    <span class="catalog__not-ready-inner"></span>
                  </div>
                  <div class="catalog__not-ready-card">
                    <h5 class="catalog__accordion-subtitle">
                      Здесь пока пусто
                    </h5>
                    <p class="catalog__not-ready-descr">
                      А в галерее вы всегда можете найти что-то интересное для
                      себя
                    </p>
                    <a href="#gallery" class="catalog__not-ready-link"
                      >В галерею</a
                    >
                  </div>
                </div>
                <div class="catalog__accordion-card">
                  <button class="btn-reset catalog__accordion-btn flex">
                    <h4 class="catalog__accordion-title">С 1600 по 1699 гг.</h4>
                    <svg
                      class="catalog__svg"
                      width="50"
                      height="50"
                      viewBox="-2 0 53 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="background"
                        d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
                        fill="#ECECEC"
                      />
                      <path
                        class="border"
                        d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
                        stroke="black"
                      />
                      <path
                        d="M33.3333 23.3333L25 31.6667L16.6667 23.3333"
                        stroke="black"
                      />
                    </svg>
                  </button>
                </div>
                <div class="catalog__subartists catalog__not-ready flex">
                  <div class="catalog__not-ready-img">
                    <span class="catalog__not-ready-inner"></span>
                  </div>
                  <div class="catalog__not-ready-card">
                    <h5 class="catalog__accordion-subtitle">
                      Здесь пока пусто
                    </h5>
                    <p class="catalog__not-ready-descr">
                      А в галерее вы всегда можете найти что-то интересное для
                      себя
                    </p>
                    <a href="#gallery" class="catalog__not-ready-link"
                      >В галерею</a
                    >
                  </div>
                </div>
                <div class="catalog__accordion-card">
                  <button class="btn-reset catalog__accordion-btn flex">
                    <h4 class="catalog__accordion-title">С 1700 по 1799 гг.</h4>
                    <svg
                      class="catalog__svg"
                      width="50"
                      height="50"
                      viewBox="-2 0 53 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="background"
                        d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
                        fill="#ECECEC"
                      />
                      <path
                        class="border"
                        d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
                        stroke="black"
                      />
                      <path
                        d="M33.3333 23.3333L25 31.6667L16.6667 23.3333"
                        stroke="black"
                      />
                    </svg>
                  </button>
                </div>
                <div class="catalog__subartists catalog__not-ready flex">
                  <div class="catalog__not-ready-img">
                    <span class="catalog__not-ready-inner"></span>
                  </div>
                  <div class="catalog__not-ready-card">
                    <h5 class="catalog__accordion-subtitle">
                      Здесь пока пусто
                    </h5>
                    <p class="catalog__not-ready-descr">
                      А в галерее вы всегда можете найти что-то интересное для
                      себя
                    </p>
                    <a href="#gallery" class="catalog__not-ready-link"
                      >В галерею</a
                    >
                  </div>
                </div>
                <div class="catalog__accordion-card">
                  <button class="btn-reset catalog__accordion-btn flex">
                    <h4 class="catalog__accordion-title">С 1800 по 1899 гг.</h4>
                    <svg
                      class="catalog__svg"
                      width="50"
                      height="50"
                      viewBox="-2 0 53 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="background"
                        d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
                        fill="#ECECEC"
                      />
                      <path
                        class="border"
                        d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
                        stroke="black"
                      />
                      <path
                        d="M33.3333 23.3333L25 31.6667L16.6667 23.3333"
                        stroke="black"
                      />
                    </svg>
                  </button>
                </div>
                <div class="catalog__subartists catalog__not-ready flex">
                  <div class="catalog__not-ready-img">
                    <span class="catalog__not-ready-inner"></span>
                  </div>
                  <div class="catalog__not-ready-card">
                    <h5 class="catalog__accordion-subtitle">
                      Здесь пока пусто
                    </h5>
                    <p class="catalog__not-ready-descr">
                      А в галерее вы всегда можете найти что-то интересное для
                      себя
                    </p>
                    <a href="#gallery" class="catalog__not-ready-link"
                      >В галерею</a
                    >
                  </div>
                </div>
                <div class="catalog__accordion-card">
                  <button class="btn-reset catalog__accordion-btn flex">
                    <h4 class="catalog__accordion-title">С 1900 по 1999 гг.</h4>
                    <svg
                      class="catalog__svg"
                      width="50"
                      height="50"
                      viewBox="-2 0 53 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="background"
                        d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
                        fill="#ECECEC"
                      />
                      <path
                        class="border"
                        d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
                        stroke="black"
                      />
                      <path
                        d="M33.3333 23.3333L25 31.6667L16.6667 23.3333"
                        stroke="black"
                      />
                    </svg>
                  </button>
                </div>
                <div class="catalog__subartists catalog__not-ready flex">
                  <div class="catalog__not-ready-img">
                    <span class="catalog__not-ready-inner"></span>
                  </div>
                  <div class="catalog__not-ready-card">
                    <h5 class="catalog__accordion-subtitle">
                      Здесь пока пусто
                    </h5>
                    <p class="catalog__not-ready-descr">
                      А в галерее вы всегда можете найти что-то интересное для
                      себя
                    </p>
                    <a href="#gallery" class="catalog__not-ready-link"
                      >В галерею</a
                    >
                  </div>
                </div>
                <div class="catalog__accordion-card">
                  <button class="btn-reset catalog__accordion-btn flex">
                    <h4 class="catalog__accordion-title">С 2000 гг.</h4>
                    <svg
                      class="catalog__svg"
                      width="50"
                      height="50"
                      viewBox="-2 0 53 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="background"
                        d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
                        fill="#ECECEC"
                      />
                      <path
                        class="border"
                        d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
                        stroke="black"
                      />
                      <path
                        d="M33.3333 23.3333L25 31.6667L16.6667 23.3333"
                        stroke="black"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  class="catalog__subartists catalog__not-ready flex"
                  id="last-acc-content"
                >
                  <div class="catalog__not-ready-img">
                    <span class="catalog__not-ready-inner"></span>
                  </div>
                  <div class="catalog__not-ready-card">
                    <h5 class="catalog__accordion-subtitle">
                      Здесь пока пусто
                    </h5>
                    <p class="catalog__not-ready-descr">
                      А в галерее вы всегда можете найти что-то интересное для
                      себя
                    </p>
                    <a href="#gallery" class="catalog__not-ready-link"
                      >В галерею</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="events">
        <div class="container events__container">
          <h2 class="events__title">События</h2>
          <div class="events__slider">
            <button
              class="swiper-button-next swiper-button-next--events"
            ></button>
            <div class="swiper swiper--events">
              <div class="events__list swiper-wrapper">
                <div class="events-card swiper-slide">
                  <div class="events-card__top">
                    <picture>
                      <source
                        srcset="img/events/320/events1.jpg"
                        media="(max-width: 767px)"
                      />
                      <source
                        srcset="img/events/768/events1.jpg"
                        media="(max-width: 1023px)"
                      />
                      <source
                        srcset="img/events/1024/events1.jpg"
                        media="(max-width: 1439px)"
                      />
                      <img class="events-card__img img" src="img/event1.png" />
                    </picture>
                    <figcaption class="events-card__figcaption">
                      <span class="events-card__figcaption-text"
                        >Музей им. Щусева</span
                      >
                      <span class="events-card__figcaption-text">
                        с 20 марта по 30 апреля</span
                      >
                    </figcaption>
                  </div>
                  <div class="events-card__bottom">
                    <h3 class="events-card__title">
                      Книжная гравюра в живом восприятии
                    </h3>
                    <p class="events-card__text">
                      Один из ведущих флорентийских художников Кватроченто,
                      основатель художественной династии, которую продолжили его
                      брат Давид и сын Ридольфо.
                    </p>
                    <a href="#" class="events-card__link">Подробнее</a>
                  </div>
                </div>
                <div class="events-card swiper-slide">
                  <div class="events-card__top">
                    <picture>
                      <source
                        srcset="img/events/320/events2.jpg"
                        media="(max-width: 767px)"
                      />
                      <source
                        srcset="img/events/768/events2.jpg"
                        media="(max-width: 1023px)"
                      />
                      <source
                        srcset="img/events/1024/events2.jpg"
                        media="(max-width: 1439px)"
                      />
                      <img class="events-card__img img" src="img/event2.png" />
                    </picture>
                    <figcaption class="events-card__figcaption">
                      <span class="events-card__figcaption-text">ММОМА</span>
                      <span class="events-card__figcaption-text">
                        24 марта 19:00</span
                      >
                    </figcaption>
                  </div>
                  <div class="events-card__bottom">
                    <h3 class="events-card__title">
                      «Открытая дискуссия». Дмитрий Петров и Сергей Ильин.
                    </h3>
                    <p class="events-card__text">
                      Высокий уровень вовлечения представителей целевой
                      аудитории является четким доказательством простого факта.
                    </p>
                    <a href="#" class="events-card__link">Подробнее</a>
                  </div>
                </div>
                <div class="events-card swiper-slide">
                  <div class="events-card__top">
                    <picture>
                      <source
                        srcset="img/events/320/events3.jpg"
                        media="(max-width: 767px)"
                      />
                      <source
                        srcset="img/events/768/events3.jpg"
                        media="(max-width: 1023px)"
                      />
                      <source
                        srcset="img/events/1024/events3.jpg"
                        media="(max-width: 1439px)"
                      />
                      <img class="events-card__img img" src="img/event3.png" />
                    </picture>
                    <figcaption class="events-card__figcaption">
                      <span class="events-card__figcaption-text"
                        >Еврейский музей</span
                      >
                      <span class="events-card__figcaption-text">
                        с 31 марта по 21 апреля</span
                      >
                    </figcaption>
                  </div>
                  <div class="events-card__bottom">
                    <h3 class="events-card__title">
                      Выставка «Формация 2020»
                    </h3>
                    <p class="events-card__text">
                      Идейные соображения высшего порядка, а также современная
                      методология разработки играет важную роль в формировании
                      глубокомысленных рассуждений.
                    </p>
                    <a href="#" class="events-card__link">Подробнее</a>
                  </div>
                </div>
                <div class="events-card swiper-slide">
                  <div class="events-card__top">
                    <picture>
                      <source
                        srcset="img/events/320/events4.jpg"
                        media="(max-width: 767px)"
                      />
                      <source
                        srcset="img/events/768/events4.jpg"
                        media="(max-width: 1023px)"
                      />
                      <source
                        srcset="img/events/1024/events4.jpg"
                        media="(max-width: 1439px)"
                      />
                      <img class="events-card__img img" src="img/event4.png" />
                    </picture>
                    <figcaption class="events-card__figcaption">
                      <span class="events-card__figcaption-text"
                        >Третьяковка на Крымском валу
                      </span>
                      <span class="events-card__figcaption-text"
                        >с 30 марта по 30 апреля</span
                      >
                    </figcaption>
                  </div>
                  <div class="events-card__bottom">
                    <h3 class="events-card__title">
                      XXIV Международная биеннале молодого искусства
                    </h3>
                    <p class="events-card__text">
                      Внезапно, реплицированные с зарубежных источников,
                      современные исследования.
                    </p>
                    <a href="#" class="events-card__link">Подробнее</a>
                  </div>
                </div>
                <div class="events-card swiper-slide">
                  <div class="events-card__top">
                    <picture>
                      <source
                        srcset="img/events/320/events5.jpg"
                        media="(max-width: 767px)"
                      />
                      <source
                        srcset="img/events/768/events5.jpg"
                        media="(max-width: 1023px)"
                      />
                      <source
                        srcset="img/events/1024/events5.jpg"
                        media="(max-width: 1439px)"
                      />
                      <img class="events-card__img img" src="img/event5.png" />
                    </picture>
                    <figcaption class="events-card__figcaption">
                      <span class="events-card__figcaption-text">ММАМ</span>
                      <span class="events-card__figcaption-text"
                        >с 8 апреля по 20 мая</span
                      >
                    </figcaption>
                  </div>
                  <div class="events-card__bottom">
                    <h3 class="events-card__title">
                      Джон Винзор. Фотографии из серии «Метафора серебра»
                    </h3>
                    <p class="events-card__text">
                      Один из ведущих флорентийских художников Кватроченто,
                      основатель художественной династии, которую продолжили его
                      брат Давид и сын Ридольфо.
                    </p>
                    <a href="#" class="events-card__link">Подробнее</a>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination swiper-pagination-events"></div>
            </div>
            <button
              class="swiper-button-prev swiper-button-prev--events"
            ></button>
          </div>
        </div>
      </section>
      <section class="project">
        <div class="project__container container">
          <h2 class="project__title">Проекты</h2>
          <p class="project__descr">
            Предварительные выводы: постоянное информационно-пропагандистское
            обеспечение нашей деятельности однозначно фиксирует необходимость
            своевременного выполнения сверхзадачи. А&nbsp;ещё независимые
            государства смешаны с&nbsp;не&nbsp;уникальными данными
            до&nbsp;степени совершенной неузнаваемости, из-за чего возрастает
            их&nbsp;статус бесполезности. Прежде всего, постоянное
            информационно-пропагандистское
            <button class="project__btn btn--tooltip btn-reset"
              data-tippy-content="Пример современных тенденций - современная методология разработки">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="tooltip-ellipse"
                  d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z"
                  stroke="#9D5CD0" />
                <path class="tooltip-i"
                  d="M7.26154 6.4551H8.73846V13H7.26154V6.4551ZM8 4.90259C7.71282 4.90259 7.4718 4.81126 7.27692 4.62861C7.09231 4.44597 7 4.22273 7 3.9589C7 3.69508 7.09231 3.47184 7.27692 3.28919C7.4718 3.0964 7.71282 3 8 3C8.28718 3 8.52308 3.09132 8.70769 3.27397C8.90256 3.44647 9 3.66464 9 3.92846C9 4.20243 8.90256 4.43582 8.70769 4.62861C8.52308 4.81126 8.28718 4.90259 8 4.90259Z"
                  fill="black" />
              </svg>
            </button>
            обеспечение нашей деятельности
            однозначно фиксирует необходимость экономической целесообразности
            принимаемых решений. И&nbsp;нет сомнений, что действия
            представителей оппозиции могут быть рассмотрены
            <button class="project__btn btn--tooltip btn-reset"
              data-tippy-content="Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции ">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="tooltip-ellipse"
                  d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z"
                  stroke="#9D5CD0" />
                <path class=" "
                  d="M7.26154 6.4551H8.73846V13H7.26154V6.4551ZM8 4.90259C7.71282 4.90259 7.4718 4.81126 7.27692 4.62861C7.09231 4.44597 7 4.22273 7 3.9589C7 3.69508 7.09231 3.47184 7.27692 3.28919C7.4718 3.0964 7.71282 3 8 3C8.28718 3 8.52308 3.09132 8.70769 3.27397C8.90256 3.44647 9 3.66464 9 3.92846C9 4.20243 8.90256 4.43582 8.70769 4.62861C8.52308 4.81126 8.28718 4.90259 8 4.90259Z"
                  fill="black" />
              </svg>
            </button>
            исключительно
            в&nbsp;разрезе маркетинговых и&nbsp;финансовых
              <button class="project__btn btn--tooltip btn-reset" data-tippy-content="В стремлении повысить качество">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="tooltip-ellipse"
                    d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z"
                    stroke="#9D5CD0" />
                  <path class="tooltip-i"
                    d="M7.26154 6.4551H8.73846V13H7.26154V6.4551ZM8 4.90259C7.71282 4.90259 7.4718 4.81126 7.27692 4.62861C7.09231 4.44597 7 4.22273 7 3.9589C7 3.69508 7.09231 3.47184 7.27692 3.28919C7.4718 3.0964 7.71282 3 8 3C8.28718 3 8.52308 3.09132 8.70769 3.27397C8.90256 3.44647 9 3.66464 9 3.92846C9 4.20243 8.90256 4.43582 8.70769 4.62861C8.52308 4.81126 8.28718 4.90259 8 4.90259Z"
                    fill="black" />
                </svg>
              </button>
            предпосылок. Банальные, но&nbsp;неопровержимые выводы, а&nbsp;также представители
            современных социальных резервов призывают нас к&nbsp;новым
            свершениям, которые, в&nbsp;свою очередь, должны быть смешаны
            с&nbsp;не&nbsp;уникальными данными до&nbsp;степени совершенной
            неузнаваемости. Подробнее:
            <a class="project__link" href="#"> blanchard-art.ru/projects </a>
          </p>
          <h3 class="project__subtitle">
            Партнёры проектов:
          </h3>
          <div class="project__slider">
            <div class="swiper-button-prev swiper-button-prev--project"></div>
            <div class="swiper project__swiper">
              <div class="swiper-wrapper">
                <a href="#" class="swiper-slide project__item">
                  <img class="project__img" src="img/progect1.jpg">
                </a>
                <a href="#" class="swiper-slide project__item">
                  <img class="project__img" src="img/progect2.jpg">
                </a>
                <a href="#" class="swiper-slide project__item">
                  <img class="project__img" src="img/progect3.jpg">
                </a>
                <a href="#" class="swiper-slide project__item">
                  <img class="project__img" src="img/progect4.jpg">
                </a>
                <a href="#" class="swiper-slide project__item">
                  <img class="project__img" src="img/progect5.jpg">
                </a>
                <a href="#" class="swiper-slide project__item">
                  <img class="project__img" src="img/progect6.jpg">
                </a>
                <a href="#" class="swiper-slide project__item">
                  <img class="project__img" src="img/progect7.jpg">
                </a>
                <a href="#" class="swiper-slide project__item">
                  <img class="project__img" src="img/progect8.jpg">
                </a>
                <a href="#" class="swiper-slide project__item">
                  <img class="project__img" src="img/progect9.jpg">
                </a>
              </div>
            </div>
            <div class="swiper-button-next swiper-button-next--project"></div>
          </div>
        </div>
      </section>
      <section class="contacts">
        <div class="contacts__container container">
          <div class="contacts__top-block flex">
          <div class="contacts__adress">
            <h3 class="contacts__title">
              Шоурум &#8470;&nbsp;4
            </h3>
            <p class="contacts__adress-descr">
              Леонтьевский переулок, дом 5/1
            </p>
          </div>

          <form class="contacts__form flex" id="form" action="#">
            <div class="contacts__form-card">
            <input class="contacts__input" id="name" type="text" name="name" placeholder="Имя*" data-validate-field="name">
            </div>
            <div class="contacts__form-card">
            <input class="contacts__input" id="phone" type="phone" name="phone" placeholder="Телефон*" data-validate-field="phone">
            </div>
            <div class="contacts__form-card">
            <button class="contacts__btn">Заказать обратный звонок</button>
          </div>
          </form>

          <div class="contacts__messendjer">
            <h3 class="contacts__messendjer-descr">
              Связаться в&nbsp;один клик
            </h3>
            <ul class="contacts__list list-reset flex">
              <li class="contacts__item">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 39.375C30.7005 39.375 39.375 30.7005 39.375 20C39.375 9.29948 30.7005 0.625 20 0.625C9.29948 0.625 0.625 9.29948 0.625 20C0.625 30.7005 9.29948 39.375 20 39.375Z" fill="#30BF39"/>
                  <path d="M25.8749 21.751C25.6249 21.626 24.3124 20.876 24.0624 20.8135C23.8124 20.6885 23.6249 20.6885 23.4374 20.9385C23.2499 21.1885 22.6874 21.8135 22.5624 21.9385C22.3749 22.126 22.2499 22.126 21.9999 22.001C21.7499 21.876 20.8749 21.5635 19.8749 20.5635C19.1249 19.8135 18.5624 18.9385 18.4374 18.626C18.3124 18.376 18.4374 18.1885 18.5624 18.0635C18.6874 17.9385 18.8124 17.751 18.9999 17.626C19.1874 17.501 19.1874 17.376 19.3124 17.1885C19.4374 17.001 19.3749 16.876 19.3124 16.6885C19.2499 16.501 18.7499 15.1885 18.5624 14.626C18.3749 14.0635 18.1249 14.1885 17.9999 14.126C17.8124 14.126 17.6874 14.0635 17.4999 14.0635C17.2499 14.0635 16.9374 14.1885 16.7499 14.376C16.4999 14.626 15.7499 15.251 15.7499 16.5635C15.7499 17.876 16.6249 19.251 16.7499 19.376C16.8749 19.5635 18.4999 22.4385 21.1874 23.626C23.8749 24.8135 23.8749 24.4385 24.3749 24.4385C24.8749 24.4385 25.9999 23.8135 26.2499 23.251C26.4999 22.626 26.4999 22.0635 26.4374 22.001C26.3124 22.001 26.1249 21.9385 25.8749 21.751ZM20.8749 28.1885C19.1249 28.1885 17.4999 27.6885 16.0624 26.751L12.6874 27.8135L13.8124 24.5635C12.7499 23.0635 12.1249 21.251 12.1249 19.376C12.1249 14.501 16.0624 10.5635 20.9374 10.5635C25.8124 10.5635 29.6874 14.501 29.6874 19.376C29.6874 24.251 25.7499 28.1885 20.8749 28.1885ZM20.8749 8.81348C15.0624 8.81348 10.3124 13.5635 10.3124 19.376C10.3124 21.3135 10.8124 23.1885 11.8124 24.8135L9.87489 30.501L15.7499 28.626C17.3124 29.501 19.0624 29.9385 20.8749 29.9385C26.6874 29.9385 31.4374 25.1885 31.4374 19.376C31.4374 13.5635 26.7499 8.81348 20.8749 8.81348Z" fill="white"/>
                  </svg>
              </li>
              <li class=" ">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z" fill="url(#paint0_linear_136320_63)"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.05312 19.7889L20.7167 14.7649C26.271 12.4547 27.425 12.0534 28.1773 12.0402C28.3428 12.0373 28.7127 12.0783 28.9523 12.2727C29.1547 12.4369 29.2103 12.6587 29.237 12.8143C29.2636 12.9699 29.2968 13.3246 29.2704 13.6017C28.9694 16.7641 27.667 24.4386 27.0045 27.9806C26.7241 29.4794 26.1725 29.9819 25.6377 30.0311C24.4762 30.138 23.5943 29.2635 22.4694 28.5261L18.006 25.528C16.0314 24.2268 17.3114 23.5116 18.4368 22.3428C18.7313 22.0368 23.8486 17.3823 23.9476 16.96C23.9596 16.9072 23.9715 16.7104 23.8546 16.6064C23.7376 16.5024 23.565 16.5384 23.4404 16.5663C23.2639 16.6064 20.4519 18.465 15.0044 22.1423C14.2062 22.6904 13.4832 22.9575 12.8354 22.9435C12.1213 22.9281 10.7477 22.5397 9.72652 22.2078C8.474 21.8007 7.47852 21.5854 7.56524 20.8939C7.61036 20.5338 8.10632 20.1655 9.05308 19.789L9.05312 19.7889Z" fill="white"/>
                  <defs>
                  <linearGradient id="paint0_linear_136320_63" x1="20" y1="0" x2="20" y2="39.7033" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#2AABEE"/>
                  <stop offset="1" stop-color="#229ED9"/>         
                  </defs>
                  </svg>
              </li>
            </ul>
          </div>
        </div> 
             </div>
        <div class="contacts__map">
          <iframe src="https://snazzymaps.com/embed/386933" width="100%" height="696px" style="border:#cacaca;"></iframe>
        </div>
      </section>
    </main>
    <footer>
      <div class="footer__container container">
        <div class="footer__block flex">
          <img src="img/logo.svg" alt="logotip">
          <ul class="  list-reset flex">
            <li class="footer__item">
              <a class="footer__messenger" href="#">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5 0C10.074 0 0 10.0736 0 22.5C0 34.9264 10.074 45 22.5 45C34.926 45 45 34.9264 45 22.5C45 10.0736 34.926 0 22.5 0ZM33.9132 24.9335C34.9619 25.9577 36.0714 26.9217 37.0128 28.0519C37.4299 28.5519 37.823 29.0688 38.1222 29.6503C38.5495 30.4794 38.1637 31.3886 37.4216 31.4379L32.812 31.4369C31.6215 31.5354 30.6741 31.0553 29.8754 30.2414C29.2378 29.5927 28.6462 28.8999 28.0321 28.2292C27.7812 27.9539 27.517 27.6947 27.2021 27.4907C26.5737 27.0819 26.0277 27.2072 25.6677 27.8636C25.3008 28.5316 25.217 29.2719 25.182 30.0153C25.1319 31.1022 24.8041 31.3863 23.7135 31.4374C21.3832 31.5465 19.1721 31.1929 17.117 30.0181C15.3041 28.9818 13.901 27.5193 12.6783 25.8634C10.2973 22.6353 8.47381 19.0924 6.8354 15.4478C6.46665 14.627 6.73642 14.1878 7.64194 14.1707C9.14639 14.1417 10.6508 14.1454 12.1553 14.1694C12.7676 14.179 13.1727 14.5294 13.4079 15.1071C14.2209 17.1074 15.2176 19.0105 16.4665 20.7755C16.7994 21.2455 17.1391 21.7142 17.623 22.0461C18.157 22.4125 18.5639 22.2915 18.8158 21.6953C18.9769 21.3164 19.0464 20.9113 19.0814 20.5053C19.2011 19.1145 19.2153 17.7242 19.0082 16.339C18.8793 15.4722 18.3918 14.9124 17.5277 14.7485C17.0876 14.6652 17.152 14.5022 17.3661 14.2508C17.7376 13.8163 18.0856 13.5474 18.7812 13.5474L23.9893 13.5465C24.8101 13.7076 24.9942 14.0759 25.1056 14.9027L25.1102 20.6903C25.1006 21.0103 25.2709 21.9586 25.8454 22.1681C26.3058 22.32 26.6096 21.9508 26.8849 21.6594C28.1339 20.334 29.0237 18.7697 29.8206 17.1506C30.1723 16.4366 30.4757 15.6978 30.7703 14.9575C30.9895 14.4101 31.3301 14.1408 31.9479 14.15L36.9631 14.156C37.1108 14.156 37.2609 14.1574 37.4073 14.1827C38.2525 14.3273 38.4841 14.6909 38.2226 15.5154C37.811 16.8109 37.0114 17.89 36.2297 18.9718C35.3919 20.1301 34.4983 21.2478 33.6687 22.4111C32.9064 23.4746 32.9667 24.01 33.9132 24.9335Z" fill="#CACACA"/>
                  </svg>
            </li>
            <li class="footer__item">
              <a class="footer__messenger" href="#">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.1172 22.5C18.1172 24.8785 20.0453 26.8066 22.4238 26.8066C24.8024 26.8066 26.7305 24.8785 26.7305 22.5C26.7305 20.1215 24.8024 18.1934 22.4238 18.1934C20.0453 18.1934 18.1172 20.1215 18.1172 22.5Z" fill="#CACACA"/>
                  <path d="M12.3521 14.8803C12.5591 14.3194 12.8894 13.8116 13.3186 13.3948C13.7354 12.9656 14.2428 12.6354 14.8041 12.4283C15.2594 12.2515 15.9433 12.0411 17.2029 11.9837C18.5656 11.9216 18.9741 11.9082 22.4238 11.9082C25.8739 11.9082 26.2824 11.9212 27.6447 11.9834C28.9044 12.0411 29.5886 12.2515 30.0435 12.4283C30.6049 12.6354 31.1126 12.9656 31.5291 13.3948C31.9582 13.8116 32.2885 14.319 32.4959 14.8803C32.6727 15.3356 32.8832 16.0198 32.9405 17.2795C33.0026 18.6418 33.016 19.0503 33.016 22.5004C33.016 25.9501 33.0026 26.3587 32.9405 27.7213C32.8832 28.981 32.6727 29.6649 32.4959 30.1201C32.2885 30.6814 31.9586 31.1889 31.5294 31.6057C31.1126 32.0348 30.6052 32.3651 30.0439 32.5721C29.5886 32.7493 28.9044 32.9597 27.6447 33.0171C26.2824 33.0792 25.8742 33.0922 22.4242 33.0922C18.9738 33.0922 18.5652 33.0792 17.2033 33.0171C15.9436 32.9597 15.2594 32.7493 14.8041 32.5721C13.6773 32.1375 12.7868 31.2469 12.3521 30.1201C12.1753 29.6649 11.9648 28.981 11.9072 27.7213C11.845 26.3587 11.832 25.9501 11.832 22.5004C11.832 19.0503 11.845 18.6418 11.9072 17.2795C11.9645 16.0198 12.175 15.3356 12.3521 14.8803ZM22.4238 29.1344C26.0881 29.1344 29.0585 26.1643 29.0585 22.5001C29.0585 18.8358 26.0881 15.8657 22.4238 15.8657C18.7599 15.8657 15.7895 18.8358 15.7895 22.5001C15.7895 26.1643 18.7599 29.1344 22.4238 29.1344ZM15.5272 17.1538C16.3834 17.1538 17.0776 16.4596 17.0776 15.6034C17.0776 14.7471 16.3834 14.0529 15.5272 14.0529C14.6709 14.0529 13.9767 14.7471 13.9767 15.6034C13.9771 16.4596 14.6709 17.1538 15.5272 17.1538Z" fill="#CACACA"/>
                  <path d="M22.6204 0C34.9364 0 44.9238 9.98747 44.9238 22.3034C44.9238 34.6194 34.9364 44.6069 22.6204 44.6069C10.3044 44.6069 0.316959 34.6194 0.316959 22.3034C0.316959 9.98747 10.3044 0 22.6204 0ZM9.89059 27.5836C9.95253 28.9469 10.1693 29.8777 10.4858 30.6924C11.1512 32.4127 12.5111 33.7727 14.2314 34.438C15.0458 34.7545 15.9769 34.971 17.3399 35.0332C18.7057 35.0955 19.1419 35.1105 22.6201 35.1105C26.0985 35.1105 26.5345 35.0955 27.9005 35.0332C29.2635 34.971 30.1946 34.7545 31.009 34.438C31.8639 34.1164 32.6378 33.6124 33.2776 32.9607C33.929 32.3212 34.433 31.547 34.7546 30.6924C35.0711 29.878 35.2879 28.9469 35.3498 27.5839C35.4128 26.2178 35.4274 25.7815 35.4274 22.3034C35.4274 18.8253 35.4128 18.389 35.3502 17.0233C35.2883 15.66 35.0718 14.7292 34.7553 13.9145C34.4337 13.0599 33.9293 12.2857 33.2776 11.6462C32.6382 10.9945 31.8639 10.4905 31.0094 10.1689C30.1946 9.85236 29.2638 9.63592 27.9005 9.57364C26.5348 9.51136 26.0985 9.49638 22.6204 9.49638C19.1423 9.49638 18.706 9.51136 17.3403 9.57398C15.9769 9.63592 15.0462 9.85236 14.2314 10.1685C13.3769 10.4901 12.6026 10.9945 11.9628 11.6462C11.3114 12.286 10.8071 13.0599 10.4858 13.9145C10.169 14.7292 9.95253 15.66 9.89025 17.0233C9.82798 18.389 9.81334 18.8253 9.81334 22.3034C9.81334 25.7815 9.82798 26.2178 9.89059 27.5836Z" fill="#CACACA"/>
                  </svg>
              </a>
            </li>
            <li class="footer__item">
              <a class="footer__messenger" href="#">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5 0C10.125 0 0 10.1431 0 22.6355C0 33.9307 8.23499 43.3057 18.99 45V29.1867H13.275V22.6355H18.99V17.6431C18.99 11.9729 22.3425 8.85542 27.495 8.85542C29.9475 8.85542 32.5125 9.28464 32.5125 9.28464V14.8645H29.6775C26.8875 14.8645 26.01 16.6039 26.01 18.3886V22.6355H32.265L31.2525 29.1867H26.01V45C31.312 44.1593 36.1399 41.4432 39.6223 37.342C43.1047 33.2408 45.012 28.0248 44.9999 22.6355C44.9999 10.1431 34.875 0 22.5 0Z" fill="#CACACA"/>
                  </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <script src="https://unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/choices.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/swiper-bundle.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/tippy-bundle.umd.min.js"></script>
    <script src="js/just-validate.min.js"></script>
    <script src="js/inputmask.min.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>
