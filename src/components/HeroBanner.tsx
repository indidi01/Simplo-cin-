import style from "./HeroBanner.module.css";

const HeroBanner = () => {
  return (
    <div className={style.heroBanner}>
      <div className={style.bannerContent}>
        <h1 className={style.title}>Simplo'ciné</h1>
      </div>
    </div>
  );
};

export default HeroBanner;
