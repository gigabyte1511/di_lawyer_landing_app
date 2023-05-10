
import styles from './styles.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import alpha from './img/alpha.png'
import dacha from './img/dacha.png'
import berg from './img/berg.png'
import CarouselSlide from './CarouselSlide/CarouselSlide'

export default function Carousel(): JSX.Element {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Карусель проектов</h1>
            <Slider {...settings}>
                <div >
                    <CarouselSlide
                        image={alpha}
                        text={<>
                            <p>«Ситуация: вы приобретаете телефон в рассрочку, и вам навязывают договор дополнительного страхования, аргументируя это тем, что иначе «рассрочку вам не оформят и телефон вы не получите».</p>
                            <p>1. Соглашаемся, так как телефон нам нужен здесь и сейчас. От дополнительного страхования можно отказаться в течение 14 дней после заключения договора, что мы, собственно, и делаем. А в ответ от страховой компании тишина: ни возврата уплаченной суммы страховой премии, ни ответа об отказе в выплате.</p>
                            <p>2. Составляем и направляем претензию в адрес компании с предложением вернуть денежные средства по договору, а иначе мы вынуждены будем обратиться в суд с взысканием суммы основного долга и неустойки по Закону РФ от 07.02.1992 № 2300-1 «О защите прав потребителей».</p>
                            <p>3. Компания возвращает деньги до нашего обращения в суд. Happy end!</p>
                            <p>Так я вернула ~28 000 ₽ клиенту.</p>
                            <p>Сталкивались с подобными ситуациями?</p>
                        </>}
                        header={'1 телефон в рассрочку, 1 млн навязанных услуг и 1 дополнительный договор страхования. #АльфаСпор_Альмяшева'}
                    />
                </div>
                <div>
                    <CarouselSlide
                        image={dacha}
                        text={<>
                            <p>1. Если вы запланировали строительство на своем дачном участке, то знайте, что:</p>
                            <p> - не на любом земельном участке за городом можно строить и возвести, к примеру, дачный дом. Такая возможность определяется видом разрешенного использования земли (ВРИ).</p>
                            <p>2. Разведение сельскохозяйственных животных на дачном участке запрещено. Однако в 2022 году стало возможным разведение кур и кроликов. Делать это можно лишь для личных нужд и только при условии соблюдения земельного законодательства, ветеринарных норм и санитарно-эпидемиологических правил. Земельный участок при этом должен иметь имеет вид разрешенного использования «Ведение личного подсобного хозяйства». Во всех других случаях это не допускается.</p>
                            <p>3. Жечь мусор на участке и разводить на нем костер можно с соблюдением правил противопожарного режима в РФ.</p>
                        </>}
                        header={'Дачный вопрос, шашлындос и соблюдение законодательства в этой сфере.'}
                    />
                </div>
                <div>
                    <CarouselSlide
                        image={berg}
                        text={<>
                            <p>В одном из топовых заведений невероятно красивого города Кимры официант принес мой заказ с бургером, в котором я обнаружила <b>торчащий из него волос</b>.</p>
                            <p>&quot;Ну и что, волос в бургере - это самый натуральный его ингридиент&quot; - скажите вы мне. Но я имею другое мнение по тому поводу и отвечу так: &quot;Ты что, терпила?&quot;</p>
                            <p>Если в технологической карте изготовления бургера волос не предусмотрен - то его и не должно быть в изделии.</p>
                            <p>Я немедленно обратилась к официанту со словами: &quot;Вы знаете, кто я такая? Я знаю свои права!&quot; - и потребовала заменить бургер на другой. </p>
                            <p>Обиженный официант, чувствуя серезность моих намерений и возможность последствий, заменил мой бургер на новый, в котором волоса уже обнаружено не было.</p>
                            <p>Кстати, по соседству сидящему крутому разработчику, а по совместительству просто самому умному и красивому парню Денису, заказавшему такой же бургер, заказ принесли спустя минуту после этого проишествия. Нет сомнений в том, что в его заказе был тот самый бургер, но уже с извлеченным волосом и подогретый в микроволновке.</p>
                            <p>*Интересно, догадался ли он об этом или был слишком занят наслаждением от нахождения в компании обаятельного юриста?</p>
                        </>}
                        header={'Дачный вопрос, шашлындос и соблюдение законодательства в этой сфере.'}
                    />
                </div>
            </Slider>
        </div>
    )
}
