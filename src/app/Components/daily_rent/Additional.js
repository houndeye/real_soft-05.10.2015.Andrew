import React from 'react';


export default React.createClass({

    render: function () {
        return (

            <aside className="today block block--border-orange grid_6">
                <h1 className="block__h1 block--color-orange">�������</h1>

                <a className="see-more" href="#">����������� ���� ��䳿</a>

                <article className="block--article-surround">
                    <img className="block__img block__img--poster" src="img/afisha-mykola-falafivka.jpg"/>

                    <h2 className="block__h2 block--content-margin-left">
                        <a href="#">������� ������ � ���������</a>
                    </h2>

                    <p className="block--content-margin-left">
                        ������� ����� ����������� ����� �������� ������ ���, ��� �����, �� "� ���� �����
                        ���������� ���" �� "� ���� ������ ���� - ��� �� ����� ��������", ��� �� �������
                        ��������� ����, �� ���� ���� ���������� �� ������������ �����
                    </p>
                </article>

                <article className="block--article-surround">
                    <img className="block__img block__img--poster" src="img/sim-lystkiv-grucka-chubaia.jpg"/>

                    <h2 className="block__h2 block--content-margin-left"><a href="#">������� �ѳ����</a></h2>

                    <p className="block--content-margin-left">
                        � ����� ������ ���� ������� � ������� ѳ���� �������. � �� ��������� ������� ������
                        ���� �������, ����������� ����������� ������� ����.
                    </p>
                </article>

                <article className="block--article-surround">
                    <img className="block__img block__img--poster" src="img/vystavka-koreneplastyky.jpg"/>

                    <h2 className="block__h2 block--content-margin-left">
                        <a href="#">�������� �������������� �������� ����������</a>
                    </h2>

                    <p className="block--content-margin-left">
                        ������ ��������, ��������� ������� � �����, ������ ����, ��������� ������� ������
                        � ������� 30 ����, ��������� �������� �� ������, ����, ������� �����. �� ������
                        ���������� � ����� �� ���� ���������, �� ���������� ���������������
                    </p>
                </article>
            </aside>
        )


    }

});