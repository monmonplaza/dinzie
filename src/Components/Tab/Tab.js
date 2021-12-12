import React from 'react'
// import { tabData } from './Data'
import TabItems from './TabItems';
const Tab = ({ addToCart }) => {

  const [isActive, setIsActive] = React.useState(0);
  const [isMenuActive, setIsMenuActive] = React.useState(0)
  const [MenuData, setMenuData] = React.useState([]);

  const handleIsActive = (index) => {
    setIsActive(index)
    setIsMenuActive(index)
  }


  React.useEffect(() => {
    async function getMenu() {
      let response = await fetch('https://demo.frontlinebusiness.com.ph/dev/JSON/menu.json');
      let list = await response.json();
      setMenuData(list);
    }

    getMenu();
  }, [])


  return (
    <>
      <section className="menu snap__child">
        <div className="menu__grid">
          <div className="menu__nav">
            <div className="menu__nav__wrapper">
              {
                MenuData.map((data, index) => {
                  return (
                    <TabItems

                      data={data}
                      clickIsActive={handleIsActive}
                      index={index}
                      isActiveTab={isActive}
                      key={index}
                    />
                  );
                })
              }
            </div>
          </div>

          <div className="menu__main">
            <div className="menu__main__wrapper">
              {MenuData.map((data, index) => {
                return (
                  // <div className={"menu__main__item " + data.status } id={"tab-" + data.id + "-menu"} key={key}>
                  <div className={(isMenuActive === index) ? "menu__main__item active" : "menu__main__item"} id={"tab-" + data.id + "-menu"} key={index}>
                    <img src={data.main_img} alt="" />
                    <div className="menu__main__item__description">
                      <h2>{data.title}</h2>
                      <p>
                        {data.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tab
