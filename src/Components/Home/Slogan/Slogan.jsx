import style from './Slogan.module.css';

export default function Slogan() {
    return (
        <>
            <section className={style.sectionSlogan}>
                <h1 className={style.sloganH1}>Porque fazer o bem, faz bem.</h1>
                <div className={style.ocean}>
                    <div className={style.wave}></div>
                    <div className={style.wave}></div>
                    <div className={style.wave}></div>
                </div>
            </section>
        </>
    );
}