import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Line } from "components/Line";
import { CheckBox } from "components/CheckBox";
import { List } from "components/List";
import { RatingBar } from "components/RatingBar";
import { SelectBox } from "components/SelectBox";
import { Grid } from "components/Grid";
import { Slider } from "components/Slider";
import { PagerIndicator } from "components/PagerIndicator";

const ProductListPage = () => {
  const navigate = useNavigate();

  const handleNavigate3 = () => navigate("/productdetails");

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-start justify-start mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center justify-start w-[100%]">
            <Row className="items-center justify-center 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] lg:my-[17px] xl:my-[20px] 2xl:my-[22px] 3xl:my-[27px] my-[30px] w-[6%]">
              <Image
                src={"images/img_group19_4.svg"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain w-[35%]"
                alt="Group19"
              />
              <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[auto]">{`Elliye`}</Text>
            </Row>
            <Row className="bg-white_A700 border-2 border-gray_50 border-solid items-center justify-center lg:ml-[239px] xl:ml-[274px] 2xl:ml-[308px] 3xl:ml-[370px] ml-[411px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[31%]">
              <Text className="cursor-pointer hover:font-normal font-normal mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] not-italic opacity-op5 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 hover:text-gray_800 w-[auto]">{`Search here`}</Text>
              <Image
                src={"images/img_button_1.svg"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[231px] xl:ml-[264px] 2xl:ml-[297px] 3xl:ml-[357px] ml-[397px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                alt="button"
              />
            </Row>
            <Image
              src={"images/img_icon_7.svg"}
              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[177px] xl:ml-[202px] 2xl:ml-[228px] 3xl:ml-[273px] ml-[304px] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] my-[36px] object-contain w-[4%]"
              alt="icon"
            />
            <Button className="bg-gray_800 font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] 2xl:py-[11px] 3xl:py-[13px] py-[14.705px] lg:py-[8px] xl:py-[9px] text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-white_A700 w-[6%]">{`Login`}</Button>
          </Row>
        </header>
        <Column className="items-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
          <Row className="items-center justify-start 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] xl:mr-[1050px] 2xl:mr-[1181px] 3xl:mr-[1417px] mr-[1574px] lg:mr-[918px] w-[11%]">
            <Text className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Home`}</Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] text-bluegray_100 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`>`}</Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[auto]">{`Product List`}</Text>
          </Row>
        </Column>
        <Text className="font-bold lg:ml-[500px] xl:ml-[572px] 2xl:ml-[643px] 3xl:ml-[772px] ml-[858px] lg:mr-[493px] xl:mr-[564px] 2xl:mr-[634px] 3xl:mr-[761px] mr-[846px] lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[41px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[auto]">{`Product List`}</Text>
        <Row className="items-start justify-start lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] mx-[auto] w-[85%]">
          <Column className="items-start justify-start lg:mb-[328px] xl:mb-[375px] 2xl:mb-[422px] 3xl:mb-[506px] mb-[563px] w-[15%]">
            <Column className="w-[100%]">
              <Column className="items-start justify-start w-[100%]">
                <Input
                  className="placeholder:bg-transparent bg-transparent border-0 border-b-[1px] border-bluegray_100 border-solid font-medium lg:pb-[20px] xl:pb-[23px] 2xl:pb-[25px] 3xl:pb-[31px] pb-[34.545px] pl-[0] pt-[1px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_800 text-gray_800 text-left w-[100%]"
                  name="Group49"
                  placeholder={`Categories`}
                ></Input>
                <Column className="items-start justify-start lg:mr-[57px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] mr-[99px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[60%]">
                  <Row className="items-center justify-start lg:mr-[22px] xl:mr-[25px] 2xl:mr-[28px] 3xl:mr-[34px] mr-[38px] w-[74%]">
                    <Image
                      src={"images/img_sweater_3.svg"}
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="Sweater"
                    />
                    <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Jacket`}</Text>
                  </Row>
                  <Row className="items-center justify-start lg:mr-[33px] xl:mr-[38px] 2xl:mr-[43px] 3xl:mr-[52px] mr-[58px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[60%]">
                    <Image
                      src={"images/img_tshirt_3.svg"}
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="Tshirt"
                    />
                    <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[auto]">{`Shirt`}</Text>
                  </Row>
                  <Row className="items-center justify-start lg:mr-[27px] xl:mr-[31px] 2xl:mr-[35px] 3xl:mr-[42px] mr-[47px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[68%]">
                    <Image
                      src={"images/img_pants_3.svg"}
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="Pants"
                    />
                    <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Pants`}</Text>
                  </Row>
                  <Row className="items-center justify-start lg:mr-[25px] xl:mr-[28px] 2xl:mr-[32px] 3xl:mr-[38px] mr-[43px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[71%]">
                    <Image
                      src={"images/img_boot_3.svg"}
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="Boot"
                    />
                    <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Shoes`}</Text>
                  </Row>
                  <Row className="items-center justify-start lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] mr-[48px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[67%]">
                    <Image
                      src={"images/img_dress_3.svg"}
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="Dress"
                    />
                    <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Dress`}</Text>
                  </Row>
                  <Column className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
                    <Row className="items-center justify-start w-[100%]">
                      <Image
                        src={"images/img_belt_3.svg"}
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                        alt="Belt"
                      />
                      <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Accesories`}</Text>
                    </Row>
                  </Column>
                  <Row className="items-center justify-start lg:mr-[35px] xl:mr-[40px] 2xl:mr-[45px] 3xl:mr-[54px] mr-[60px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[59%]">
                    <Image
                      src={"images/img_skirt_2.svg"}
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="Skirt"
                    />
                    <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Skirt`}</Text>
                  </Row>
                  <Row className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[93%]">
                    <Image
                      src={"images/img_chevrondown.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      alt="chevrondown"
                    />
                    <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`View more`}</Text>
                  </Row>
                </Column>
              </Column>
              <Line className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]" />
            </Column>
            <Column className="items-start justify-start lg:mr-[46px] xl:mr-[52px] 2xl:mr-[59px] 3xl:mr-[71px] mr-[79px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[68%]">
              <Text className="font-medium lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[41px] mr-[46px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[auto]">{`Filter by Price`}</Text>
              <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                <Column className="items-start justify-start w-[100%]">
                  <CheckBox
                    className="font-normal lg:mr-[32px] xl:mr-[37px] 2xl:mr-[42px] 3xl:mr-[50px] mr-[56px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[66%]"
                    inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bluegray_100 border-bw3 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                    name="Group50"
                    label={`All Price`}
                  ></CheckBox>
                  <Row className="items-center justify-start lg:mr-[12px] xl:mr-[14px] 2xl:mr-[16px] 3xl:mr-[19px] mr-[22px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[87%]">
                    <CheckBox
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      inputClassName="2xl:h-[19px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:w-[14px] w-[24px] xl:h-[17px] xl:w-[16px] mr-[5px]"
                      name="Checkedbox"
                      label={""}
                    ></CheckBox>
                    <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[auto]">{`$100 - $250`}</Text>
                  </Row>
                  <CheckBox
                    className="font-normal xl:mr-[11px] 2xl:mr-[12px] 3xl:mr-[15px] mr-[17px] lg:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[90%]"
                    inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bluegray_100 border-bw3 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                    name="Group51"
                    label={`$250 - $500`}
                  ></CheckBox>
                  <CheckBox
                    className="font-normal lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[95%]"
                    inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bluegray_100 border-bw3 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                    name="Group52"
                    label={`$750 - $1.000`}
                  ></CheckBox>
                  <CheckBox
                    className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]"
                    inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bluegray_100 border-bw3 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                    name="Group53"
                    label={`$1000 - $1.500`}
                  ></CheckBox>
                </Column>
              </Column>
            </Column>
            <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
            </Column>
            <Column className="items-start justify-start lg:mr-[30px] xl:mr-[35px] 2xl:mr-[39px] 3xl:mr-[47px] mr-[53px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[78%]">
              <Text className="font-medium lg:mr-[33px] xl:mr-[38px] 2xl:mr-[42px] 3xl:mr-[51px] mr-[57px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[auto]">{`Filter by Rating`}</Text>
              <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                <Column className="items-start justify-start w-[100%]">
                  <Row className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] gap-[16px] lg:gap-[9px] grid grid-cols-2 items-center justify-start 3xl:mr-[115px] mr-[128px] lg:mr-[74px] xl:mr-[85px] 2xl:mr-[96px] w-[33%]">
                    <CheckBox
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      inputClassName="2xl:h-[19px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:w-[14px] w-[24px] xl:h-[17px] xl:w-[16px] mr-[5px]"
                      name="Checkbox"
                      label={""}
                    ></CheckBox>
                    <Image
                      src={"images/img_star1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      alt="Star1"
                    />
                  </Row>
                  <Row className="items-center justify-start lg:mr-[56px] xl:mr-[64px] 2xl:mr-[72px] 3xl:mr-[86px] mr-[96px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[50%]">
                    <CheckBox
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      inputClassName="2xl:h-[19px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:w-[14px] w-[24px] xl:h-[17px] xl:w-[16px] mr-[5px]"
                      name="Checkbox"
                      label={""}
                    ></CheckBox>
                    <Row className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-2 items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[58%]">
                      <Image
                        src={"images/img_star1_1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Star1"
                      />
                      <Image
                        src={"images/img_star2.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Star2"
                      />
                    </Row>
                  </Row>
                  <List
                    className="gap-[0] min-h-[auto] lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[83%]"
                    orientation="vertical"
                  >
                    <Row className="items-center justify-between lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[80%]">
                      <CheckBox
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        inputClassName="2xl:h-[19px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:w-[14px] w-[24px] xl:h-[17px] xl:w-[16px] mr-[5px]"
                        name="Checkbox"
                        label={""}
                      ></CheckBox>
                      <Row className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-3 items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[69%]">
                        <Image
                          src={"images/img_star1_2.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          alt="Star1"
                        />
                        <Image
                          src={"images/img_star2_1.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          alt="Star2"
                        />
                        <Image
                          src={"images/img_star3.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          alt="Star3"
                        />
                      </Row>
                    </Row>
                    <Row className="items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]">
                      <CheckBox
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        inputClassName="2xl:h-[19px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:w-[14px] w-[24px] xl:h-[17px] xl:w-[16px] mr-[5px]"
                        name="Checkedbox"
                        label={""}
                      ></CheckBox>
                      <Row className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-4 items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[75%]">
                        <Image
                          src={"images/img_star1_3.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          alt="Star1"
                        />
                        <Image
                          src={"images/img_star2_2.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          alt="Star2"
                        />
                        <Image
                          src={"images/img_star3_1.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          alt="Star3"
                        />
                        <Image
                          src={"images/img_star5.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          alt="Star5"
                        />
                      </Row>
                    </Row>
                  </List>
                  <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <CheckBox
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        inputClassName="2xl:h-[19px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:w-[14px] w-[24px] xl:h-[17px] xl:w-[16px] mr-[5px]"
                        name="Checkbox"
                        label={""}
                      ></CheckBox>
                      <RatingBar
                        className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px]"
                        value={5}
                        starCount={5}
                        activeColor="var(--yellow_400)"
                        size={((window.innerWidth - 15) * 24) / 1920}
                      ></RatingBar>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
          <Column className="items-center justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[83%]">
            <Row className="lg:gap-[519px] xl:gap-[594px] 2xl:gap-[668px] 3xl:gap-[802px] gap-[891px] grid grid-cols-2 items-center justify-between w-[100%]">
              <Text className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]">
                <span className="text-gray_500 font-poppins">
                  <>{`Viewing `}</>
                </span>
                <span className="text-gray_800 font-poppins">
                  <>{`20`}</>
                </span>
                <span className="text-gray_500 font-poppins">
                  <>{` of `}</>
                </span>
                <span className="text-gray_800 font-poppins">
                  <>{`160`}</>
                </span>
                <span className="text-gray_500 font-poppins">
                  <>{` product`}</>
                </span>
              </Text>
              <SelectBox
                className="bg-transparent w-[100%]"
                placeholderClassName=""
                name="sort"
                placeholder={`Select`}
                isSearchable={false}
                isMulti={false}
              ></SelectBox>
            </Row>
            <Column
              className="common-pointer items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              onClick={handleNavigate3}
            >
              <Column className="w-[100%]">
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-5 items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
                    <Column className="items-center w-[100%]">
                      <Image
                        src={"images/img_placeholder_47.png"}
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
                      />
                      <Column className="items-center justify-start lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[66%]">
                        <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                          {
                            <>
                              {`Green `}
                              <br />
                              {`Warm Jacket`}
                            </>
                          }
                        </Text>
                        <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                      </Column>
                    </Column>
                    <Column className="items-center w-[100%]">
                      <Image
                        src={"images/img_placeholder_48.png"}
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
                      />
                      <Column className="items-center justify-start lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[66%]">
                        <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                          {
                            <>
                              {`Black`}
                              <br />
                              {`Warm Jacket`}
                            </>
                          }
                        </Text>
                        <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                      </Column>
                    </Column>
                    <Column className="items-center w-[100%]">
                      <Image
                        src={"images/img_placeholder_49.png"}
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
                      />
                      <Column className="items-center justify-start lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[66%]">
                        <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                          {
                            <>
                              {`Blue Grey `}
                              <br />
                              {`Warm Jacket`}
                            </>
                          }
                        </Text>
                        <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                      </Column>
                    </Column>
                    <Column className="items-center w-[100%]">
                      <Image
                        src={"images/img_placeholder_50.png"}
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
                      />
                      <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[58%]">
                        <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                          {
                            <>
                              {`Blue Denim `}
                              <br />
                              {`Jacket`}
                            </>
                          }
                        </Text>
                        <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                      </Column>
                    </Column>
                    <Column className="items-center w-[100%]">
                      <Image
                        src={"images/img_placeholder_51.png"}
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
                      />
                      <Column className="items-center justify-start lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[66%]">
                        <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                          {
                            <>
                              {`Purple `}
                              <br />
                              {`Warm Jacket`}
                            </>
                          }
                        </Text>
                        <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="items-start justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
                    <Column className="items-center justify-start w-[18%]">
                      <Image
                        src={"images/img_placeholder_52.png"}
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
                      />
                      <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[45%]">
                        <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                          {
                            <>
                              {`Casual `}
                              <br />
                              {`Pink Shirt`}
                            </>
                          }
                        </Text>
                        <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                      </Column>
                    </Column>
                    <Column className="items-center justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[18%]">
                      <Image
                        src={"images/img_placeholder_53.png"}
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
                      />
                      <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[59%]">
                        <Text className="font-medium mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[auto]">{`Gray T-shirt`}</Text>
                        <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                      </Column>
                    </Column>
                    <Column className="items-center justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[18%]">
                      <Image
                        src={"images/img_placeholder_54.png"}
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
                      />
                      <Column className="items-center justify-start xl:ml-[35px] 3xl:ml-[47px] ml-[53px] xl:mr-[34px] 3xl:mr-[46px] mr-[52px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[30px] 2xl:mx-[39px] w-[57%]">
                        <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[auto]">{`Red Flannel`}</Text>
                        <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                      </Column>
                    </Column>
                    <Column className="items-center justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[18%]">
                      <Image
                        src={"images/img_placeholder_55.png"}
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
                      />
                      <Column className="items-center justify-start lg:ml-[32px] 2xl:ml-[41px] 3xl:ml-[49px] ml-[55px] lg:mr-[31px] 2xl:mr-[40px] 3xl:mr-[48px] mr-[54px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] xl:mx-[36px] w-[56%]">
                        <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                          {
                            <>
                              {`Casual `}
                              <br />
                              {`Grey Shoes`}
                            </>
                          }
                        </Text>
                        <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                      </Column>
                    </Column>
                    <Column className="items-center justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[18%]">
                      <Image
                        src={"images/img_placeholder_56.png"}
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
                      />
                      <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[56%]">
                        <Text className="font-medium mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[auto]">{`Pink Jacket`}</Text>
                        <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                      </Column>
                    </Column>
                  </Row>
                </List>
                <Slider
                  slidesToShow={1}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  items={[...Array(3)].map(() => (
                    <>
                      <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-5 mx-[auto]">
                        <Column className="items-center justify-start w-[100%]">
                          <Image
                            src={"images/img_placeholder_57.png"}
                            className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                            alt="placeholder"
                          />
                          <Column className="items-center justify-start lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[66%]">
                            <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                              {
                                <>
                                  {`Black `}
                                  <br />
                                  {`Warm Jacket`}
                                </>
                              }
                            </Text>
                            <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Image
                            src={"images/img_placeholder_58.png"}
                            className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                            alt="placeholder"
                          />
                          <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[50%]">
                            <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                              {
                                <>
                                  {`Black`}
                                  <br />
                                  {`Brief Case`}
                                </>
                              }
                            </Text>
                            <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Image
                            src={"images/img_placeholder_59.png"}
                            className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                            alt="placeholder"
                          />
                          <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[76%]">
                            <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                              {
                                <>
                                  {`Modern Classic`}
                                  <br />
                                  {`Watch`}
                                </>
                              }
                            </Text>
                            <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Image
                            src={"images/img_placeholder_60.png"}
                            className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                            alt="placeholder"
                          />
                          <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[58%]">
                            <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                              {
                                <>
                                  {`Blue Denim `}
                                  <br />
                                  {`Skirt`}
                                </>
                              }
                            </Text>
                            <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Image
                            src={"images/img_placeholder_61.png"}
                            className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                            alt="placeholder"
                          />
                          <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[71%]">
                            <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                              {
                                <>
                                  {`Casual `}
                                  <br />
                                  {`Classic Watch`}
                                </>
                              }
                            </Text>
                            <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Image
                            src={"images/img_placeholder_62.png"}
                            className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                            alt="placeholder"
                          />
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:mr-[13px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] mr-[23px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[81%]">
                            <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                              {
                                <>
                                  {`Black Adventure`}
                                  <br />
                                  {`Boots`}
                                </>
                              }
                            </Text>
                            <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                          </Column>
                        </Column>
                        <Column className="w-[100%]">
                          <Column className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] w-[100%]">
                            <Image
                              src={"images/img_placeholder_63.png"}
                              className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                              alt="placeholder"
                            />
                          </Column>
                          <Column className="items-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                            <Column className="items-center justify-start lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] lg:mr-[22px] xl:mr-[25px] 2xl:mr-[28px] 3xl:mr-[34px] mr-[38px] w-[64%]">
                              <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                                {
                                  <>
                                    {`Black Formal`}
                                    <br />
                                    {`Highheels`}
                                  </>
                                }
                              </Text>
                              <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Image
                            src={"images/img_placeholder_64.png"}
                            className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                            alt="placeholder"
                          />
                          <Column className="items-center justify-start lg:ml-[23px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] lg:mr-[22px] 2xl:mr-[29px] 3xl:mr-[35px] mr-[39px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] xl:mx-[26px] w-[68%]">
                            <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                              {
                                <>
                                  {`Brown `}
                                  <br />
                                  {`Casual Shoes`}
                                </>
                              }
                            </Text>
                            <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Image
                            src={"images/img_placeholder_65.png"}
                            className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                            alt="placeholder"
                          />
                          <Column className="items-center justify-start lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] ml-[59px] lg:mr-[33px] xl:mr-[38px] 2xl:mr-[43px] 3xl:mr-[52px] mr-[58px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[52%]">
                            <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                              {
                                <>
                                  {`Gray `}
                                  <br />
                                  {`Longpants`}
                                </>
                              }
                            </Text>
                            <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Image
                            src={"images/img_placeholder_66.png"}
                            className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                            alt="placeholder"
                          />
                          <Column className="items-center justify-start lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] ml-[47px] lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[41px] mr-[46px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[62%]">
                            <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                              {
                                <>
                                  {`Green`}
                                  <br />
                                  {`Sport Jacket`}
                                </>
                              }
                            </Text>
                            <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$299`}</Text>
                          </Column>
                        </Column>
                      </Grid>
                    </>
                  ))}
                />
              </Column>
              <Row className="items-center justify-center lg:ml-[309px] xl:ml-[353px] 2xl:ml-[397px] 3xl:ml-[477px] ml-[530px] lg:mr-[307px] xl:mr-[351px] 2xl:mr-[395px] 3xl:mr-[474px] mr-[527px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[22%]">
                <Image
                  src={"images/img_chevrondown_2.svg"}
                  className="cursor-pointer lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] 2xl:my-[10px] 3xl:my-[12px] my-[13.5px] lg:my-[7px] xl:my-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  onClick={() => sliderRef.current?.slidePrev()}
                  alt="chevrondown"
                />
                <PagerIndicator
                  className="bg-gray_800 font-normal h-[50px] leading-lh lg:mx-[2px] 2xl:mx-[3px] xl:mx-[3px] 3xl:mx-[4px] mx-[5.00px] my-[1px] not-italic 3xl:pb-[10px] pb-[12px] lg:pb-[7px] xl:pb-[8px] 2xl:pb-[9px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] pl-[22px] pt-[11px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 w-[auto]"
                  count={3}
                  activeCss="inline-block cursor-pointer rounded-radius50 w-[10px] h-[10px] bg-gray_50 lg:mx-[2px] xl:mx-[3px] 2xl:mx-[3px] 3xl:mx-[4px] mx-[5.00px]"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer rounded-radius50 w-[10px] h-[10px] bg-colors lg:mx-[2px] xl:mx-[3px] 2xl:mx-[3px] 3xl:mx-[4px] mx-[5.00px]"
                  sliderRef={sliderRef}
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text className="border-2 border-gray_500 border-solid font-normal lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] leading-lh lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] pl-[20px] 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]">{`2`}</Text>
                <Text className="border-2 border-gray_500 border-solid font-normal lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] leading-lh lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] pl-[20px] 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]">{`3`}</Text>
                <Image
                  src={"images/img_chevrondown_3.svg"}
                  className="cursor-pointer lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 2xl:my-[10px] 3xl:my-[12px] my-[13.5px] lg:my-[7px] xl:my-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  onClick={() => sliderRef.current?.slideNext()}
                  alt="chevrondown"
                />
              </Row>
            </Column>
          </Column>
        </Row>
        <footer className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Column className="bg-gray_800 items-center justify-end w-[100%]">
            <Row className="items-start justify-between lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] mx-[auto] w-[85%]">
              <Column className="items-start justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] w-[25%]">
                <Row className="items-center justify-start lg:mr-[177px] xl:mr-[202px] 2xl:mr-[228px] 3xl:mr-[273px] mr-[304px] w-[27%]">
                  <Image
                    src={"images/img_group19_5.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain w-[35%]"
                    alt="Group19"
                  />
                  <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700 w-[auto]">{`Elliye`}</Text>
                </Row>
                <Text className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[92%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .`}</Text>
                <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Column className="w-[100%]">
                    <Row className="items-center justify-start w-[100%]">
                      <Image
                        src={"images/img_call_2.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Call"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 w-[auto]">{`+1234567890`}</Text>
                    </Row>
                    <Row className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Image
                        src={"images/img_email_2.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Email"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 w-[auto]">{`elliye@support.com`}</Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Row className="items-start justify-between lg:ml-[162px] xl:ml-[185px] 2xl:ml-[208px] 3xl:ml-[250px] ml-[278px] w-[57%]">
                <Column className="items-start justify-start lg:mb-[32px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[50px] mb-[56px] w-[26%]">
                  <Text className="font-bold lg:mr-[46px] xl:mr-[52px] 2xl:mr-[59px] 3xl:mr-[71px] mr-[79px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700 w-[auto]">{`Product Links`}</Text>
                  <Column className="items-start justify-start 2xl:mr-[108px] 3xl:mr-[129px] mr-[144px] lg:mr-[84px] xl:mr-[96px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[41%]">
                    <Text className="font-normal mr-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Categories`}</Text>
                    <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`New Arrival`}</Text>
                    <Text className="font-normal lg:mr-[13px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] mr-[23px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Features`}</Text>
                    <Text className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Collections`}</Text>
                  </Column>
                </Column>
                <Column className="items-start justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[26%]">
                  <Text className="font-bold 3xl:mr-[109px] mr-[122px] lg:mr-[71px] xl:mr-[81px] 2xl:mr-[91px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700 w-[auto]">{`Company`}</Text>
                  <Column className="items-start justify-start lg:mr-[57px] xl:mr-[65px] 2xl:mr-[73px] 3xl:mr-[88px] mr-[98px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[60%]">
                    <Text className="font-normal lg:mr-[54px] xl:mr-[62px] 2xl:mr-[69px] 3xl:mr-[83px] mr-[93px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`About`}</Text>
                    <Text className="font-normal mr-[107px] lg:mr-[62px] xl:mr-[71px] 2xl:mr-[80px] 3xl:mr-[96px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Blog`}</Text>
                    <Text className="font-normal lg:mr-[43px] xl:mr-[50px] 2xl:mr-[56px] 3xl:mr-[67px] mr-[75px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Careers`}</Text>
                    <Text className="font-normal lg:mr-[42px] xl:mr-[48px] 2xl:mr-[54px] 3xl:mr-[64px] mr-[72px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Services`}</Text>
                    <Text className="font-normal lg:mr-[14px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[22px] mr-[25px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Privacy Policy`}</Text>
                    <Text className="font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Terms of service`}</Text>
                  </Column>
                </Column>
                <Column className="items-start justify-start lg:mb-[41px] xl:mb-[47px] 2xl:mb-[53px] 3xl:mb-[63px] mb-[71px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[41%]">
                  <Text className="font-bold 2xl:mr-[109px] 3xl:mr-[131px] mr-[146px] lg:mr-[85px] xl:mr-[97px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700 w-[auto]">{`Join our Newsletter`}</Text>
                  <Text className="font-normal leading-lh lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]">{`Drop your email below to get update, promotions, coupons, and more!`}</Text>
                  <Column className="lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] w-[100%]">
                    <Row className="bg-gray_800 border border-solid border-white_A700 items-center justify-between w-[100%]">
                      <Text className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic opacity-op5 text-bluegray_100 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 tracking-ls1 w-[auto]">{`Enter your email`}</Text>
                      <Image
                        src={"images/img_submit_2.svg"}
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] 2xl:ml-[111px] 3xl:ml-[134px] ml-[149px] lg:ml-[86px] xl:ml-[99px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                        alt="submit"
                      />
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Row>
            <Text className="font-normal lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:ml-[478px] xl:ml-[547px] 2xl:ml-[615px] 3xl:ml-[738px] ml-[820px] lg:mr-[477px] xl:mr-[546px] 2xl:mr-[614px] 3xl:mr-[737px] mr-[819px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] mt-[96px] not-italic text-bluegray_100 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default ProductListPage;
