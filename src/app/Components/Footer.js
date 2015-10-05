import React from 'react';


export default React.createClass({

    render: function () {
        return (

            <footer className="footer">
                <div className="container_12">
                    <div className="wrap">
                        <article className="grid_4 link-block alpha">
                            <h3 className="title link-block--color link-block__header">Про «LvivOnline» </h3>
                            <ul className="link-block__list link-block--color">
                                <li><a className="link-block--color" href="#">Про сайт</a></li>
                                <li><a className="link-block--color" href="#">Контакти</a></li>
                                <li><a className="link-block--color" href="#">Партнери</a></li>
                                <li><a className="link-block--color" href="#">Карта сайту</a></li>
                            </ul>
                        </article>

                        <article className="grid_4 link-block">
                            <h3 className="title link-block--color link-block__header">Зворотній зв’язок</h3>
                            <ul className="link-block__list link-block--color">
                                <li><a className="link-block--color" href="#">Додати подію</a></li>
                                <li><a className="link-block--color" href="#">Власникам закладів</a></li>
                                <li><a className="link-block--color" href="#">Додати заклад</a></li>
                                <li><a className="link-block--color" href="#">Реклама</a></li>
                            </ul>
                        </article>

                        <article className="grid_4 link-block omega">
                            <h3 className="title link-block--color link-block__header">Слідкувати</h3>
                            <a className="link-block--color follow follow__rss" href="#"></a>
                            <a className="link-block--color follow follow__twitter" href="#"></a>
                            <a className="link-block--color follow follow__facebook" href="#"></a>
                            <a className="link-block--color follow follow__vk" href="#"></a>
                            <a className="link-block--color follow follow__lg" href="#"></a>
                            <a className="link-block--color follow follow__google-plus" href="#"></a>
                            <a className="link-block--color follow follow__pinterest" href="#"></a>
                            <a className="link-block--color follow follow__instagram" href="#"></a>
                        </article>

                        <div className="all-logos grid_12 alpha omega">
                            <a className="all-logos__link lviv" target="_blank" href="http://lviv-online.com/ua/"></a>
                            <a className="all-logos__link frankivsk" target="_blank"
                               href="http://frankivsk-online.com/"></a>
                            <a className="all-logos__link ternopil" target="_blank"
                               href="http://ternopil-online.com/"></a>
                            <a className="all-logos__link lutsk" target="_blank" href="http://lutsk-online.com/"></a>
                            <a className="all-logos__link uzhgorod" target="_blank"
                               href="http://uzhgorod-online.com/"></a>
                            <a className="all-logos__link chernivtsi" rel="nofollow"
                               href="http://chernivtsi-online.net/"></a>
                        </div>

                        <div className="copyright grid_12 alpha omega">
 <span>
 © 2009 - 2014, lviv-online.com <br/> Використання матеріалів можливе при (не закритому для
 індексування) гіперпосиланні на сторінку оригінальної статті з вказанням повного імені сайту
 «LvivOnline - Путівник подій у місті» <br/> Працює на WordPress | Log in | запитів: 148, секунд:
 0.403
 </span>
                        </div>
                    </div>

                </div>
            </footer>
        )


    }

});