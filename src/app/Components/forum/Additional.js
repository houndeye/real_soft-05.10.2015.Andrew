import React from 'react';


export default React.createClass({

    render: function () {
        return (

            <aside className="today block block--border-orange grid_6">
                <h1 className="block__h1 block--color-orange">Сьогодні</h1>

                <a className="see-more" href="#">переглянути інші події</a>

                <article className="block--article-surround">
                    <img className="block__img block__img--poster" src="img/afisha-mykola-falafivka.jpg"/>

                    <h2 className="block__h2 block--content-margin-left">
                        <a href="#">Вистава «Втеча з реальності»</a>
                    </h2>

                    <p className="block--content-margin-left">
                        Вистава змушує замислитись бодай невелику частку тих, хто вважає, що "в житті треба
                        спробувати все" та "в кого сильна воля - той не стане залежним", щоб не зробити
                        фатальний крок, за яким немає повернення до повноцінного життя
                    </p>
                </article>

                <article className="block--article-surround">
                    <img className="block__img block__img--poster" src="img/sim-lystkiv-grucka-chubaia.jpg"/>

                    <h2 className="block__h2 block--content-margin-left"><a href="#">Вистава «Сільва»</a></h2>

                    <p className="block--content-margin-left">
                        В основі сюжету доля актриси і співачки Сільви Вареску. У неї закоханий молодий офіцер
                        Едвін Волянюк, представник знаменитого княжого роду.
                    </p>
                </article>

                <article className="block--article-surround">
                    <img className="block__img block__img--poster" src="img/vystavka-koreneplastyky.jpg"/>

                    <h2 className="block__h2 block--content-margin-left">
                        <a href="#">Виставка коренепластики Любомира Калиневича</a>
                    </h2>

                    <p className="block--content-margin-left">
                        Казкові персонажі, різноманітні тварини і птахи, красиві вази, помережені узорами палиці
                        – близько 30 робіт, створених майстром із коренів, гілок, наростів дерев. Ця «лісова
                        скульптура» є одним із видів мистецтва, що називається коренепластикою
                    </p>
                </article>
            </aside>
        )


    }

});