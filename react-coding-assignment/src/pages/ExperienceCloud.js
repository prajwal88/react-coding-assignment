import React, { useState, useEffect } from "react";
import {
  Flex,
  View,
  Grid,
  ListBox,
  Item,
  CheckboxGroup,
  Checkbox,
  Divider
} from "@adobe/react-spectrum";
import "../styles/page.css";
import banner from "../assets/banner.jpg";
import CardCarousel from "../components/CardCarousel";
import mockCarouselData from "../assets/mockData";
import GetAllCardData from "../services/ExperienceCloudService";
import Card from "../components/Card";


const resp = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1200,
    },
    items: 5,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 425,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 768,
      min: 600,
    },
    items: 3,
    partialVisibilityGutter: 30,
  },
  fablet: {
    breakpoint: {
      max: 600,
      min: 426,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
  ipad: {
    breakpoint: {
      max: 900,
      min: 1024,
    },
    items: 4,
    partialVisibilityGutter: 30,
  },
};

const ExperienceCloud = () => {
  let options = [
    { id: 1, name: "PhotoShop" },
    { id: 2, name: "InDesign" },
    { id: 3, name: "DreamWeaver" },
    { id: 5, name: "Lightroom" },
    { id: 6, name: "Muse" },
    { id: 7, name: "Primier Pro" },
  ];

  let [cardList, setMockData] = useState();

  useEffect(() => {
    GetAllCardData()
      .then((response) => {
        setMockData(mockCarouselData);
      })
      .catch((err) => {
        setMockData(mockCarouselData); //since api is no reliable am adding here setmockData
      });
  }, []);

  let [selectedOption, setSelectedOption] = useState();
  let [selected, setSelected] = useState();
  let [updatedCardList, updateArray] = useState(cardList);

  const updateCardData = (value) => {
    setSelected(value);
  };

  const updateData = (val) => {
    let getSetValue = val.values();
    let ProductVal = getSetValue.next().value;
    let selectedOption = options.filter((data) => data.id == ProductVal);
    setSelectedOption(selectedOption);
  };

  useEffect(() => {
    let filteredCards = cardList;
    if (selectedOption) {
      filteredCards = cardList.filter(
        (cardData) => selectedOption[0].name != cardData.key
      );
    }
    if (selected) {
      filteredCards = filteredCards.filter(
        (cardData) => !selected.includes(cardData.key)
      );
    }
    updateArray(filteredCards);
  }, [selectedOption, selected, cardList]);

  const renderCard = () => { 
    if(updatedCardList) {
     return updatedCardList.map((data, index) => {
       return <Card
        key={index}
        description= {data.description}
        headline= {data.headline}
        image= {data.image}/>
      })
    }
   }

  return (
    <>
      <div className="footer-fix">
        <Flex direction="column">
          <Flex height="200px" margin="size-150">
            <img src={banner} alt="banner" width="100%" />
          </Flex>
          <div className="slider-box-container">
            <View marginTop="size-200">
              <CardCarousel
                requireDots={true}
                resp={resp}
                casroseldata={cardList}
              ></CardCarousel>
            </View>
          </div>
          <Grid
            areas={{
              base: ["nav", "content"],
              M: ["nav      content", "nav      content"],
              L: ["nav    content toc", "nav    content toc"],
            }}
            columns={{
              M: ["size-2400", "1fr"],
              L: ["size-2400", "1fr"],
            }}
            gap="size-100"
            marginTop="size-1000">
            <View gridArea="nav">
              <Flex
                direction={{ base: "column", M: "column" }}
                gap="size-100"
                margin="size-100"
              >
                <View height="size-250" minWidth="size-900">
                  <b className="ml-10">View By Product</b>
                </View>
                <View width="size-2000">
                  <ListBox
                    width="size-2000"
                    aria-label="Animals"
                    items={options}
                    selectionMode="single"
                    onSelectionChange={(value) => updateData(value)}
                  >
                    {(item) => <Item>{item.name}</Item>}
                  </ListBox>
                </View>
                <View height="size-250" minWidth="size-900">
                  <Divider size="M" width="size-2000" />
                </View>
                <View height="size-250" minWidth="size-900">
                  <b className="ml-10">Filter By Popular Tags</b>
                </View>
                <View width="size-2000">
                  <CheckboxGroup
                    width="size-2000"
                    value={selected}
                    onChange={(value) => updateCardData(value)}
                    marginTop="size-40"
                    marginStart="size-150"
                  >
                    <Checkbox value="3D">3D</Checkbox>
                    <Checkbox value="Actions">Actions</Checkbox>
                    <Checkbox value="Brushes">Brushes</Checkbox>
                    <Checkbox value="Effects">Effects</Checkbox>
                    <Checkbox value="Gradients">Gradients</Checkbox>
                    <Checkbox value="Graphics">Graphics</Checkbox>
                    <Checkbox value="editing">Photo editing</Checkbox>
                  </CheckboxGroup>
                </View>
              </Flex>
            </View>
            <Flex direction="column">

            <View minWidth="size-900" marginTop="size-100">
                <b>Popular Apps For Advertising</b>
            </View>
            <Grid
              columns={{
                base:["1fr"],
                M: ["1fr", "1fr", "1fr", "1fr"],
                L: ["1fr", "1fr", "1fr", "1fr" ]
              }}
              gap="size-200"
              marginTop="size-300"
            >
            {
              renderCard()
            } 
            </Grid>
            </Flex>
          </Grid>
        </Flex>
      </div>
    </>
  );
};

export default ExperienceCloud;
