import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  ICardProps,
  IDividerProps,
  IImageProps,
  IInputProps,
  ILinkProps,
  ITextProps,
} from "../types/Types.d";

export const Main = styled.div`
  margin-top: 90px;
`;

export const primaryColor = "#060809";
export const accentColor = "#0BCE5A";
export const whiteColor = "#ffffff";
export const grayColor = "#8F96A3";

export const Card = styled("div")<ICardProps>`
  position: ${(props) => (props.position ? `${props.position}` : "unset")};
  background-color: ${(props) => (props.bg ? `${props.bg}` : "transparent")};
  color: ${(props) => props.color && `${props.color}`};
  width: ${(props) => (props.width ? `${props.width}` : "unset")};
  overflow: ${(props) => (props.overflow ? `${props.overflow}` : "unset")};
  max-width: ${(props) => (props.maxwidth ? `${props.maxwidth}` : "unset")};
  max-height: ${(props) => (props.maxheight ? `${props.maxheight}` : "unset")};
  min-height: ${(props) => (props.minheight ? `${props.minheight}` : "unset")};
  border-radius: ${(props) => (props.radius ? `${props.radius}` : "0px")};
  border: ${(props) => (props.border ? `${props.border}` : "unset")};
  border-top: ${(props) => props.btop && `${props.btop}`};
  border-bottom: ${(props) => props.bbottom && `${props.bbottom}`};
  padding: ${(props) => (props.padding ? `${props.padding}` : "0px")};
  margin: ${(props) => (props.margin ? `${props.margin}` : "0px")};
  // padding-top: ${(props) => (props.ptop ? `${props.ptop}` : "0px")};
  // padding-right: ${(props) => (props.pright ? `${props.pright}` : "0px")};
  // padding-bottom: ${(props) => (props.pbottom ? `${props.pbottom}` : "0px")};
  // padding-left: ${(props) => (props.pleft ? `${props.pleft}` : "0px")};
  // margin-top: ${(props) => (props.mtop ? `${props.mtop}` : "0px")};
  // margin-right: ${(props) => (props.mright ? `${props.mright}` : "0px")};
  // margin-bottom: ${(props) => (props.mbottom ? `${props.mbottom}` : "0px")};
  // margin-left: ${(props) => (props.mleft ? `${props.mleft}` : "0px")};
  top: ${(props) => (props.top ? `${props.top}` : "unset")};
  left: ${(props) => (props.left ? `${props.left}` : "unset")};
  right: ${(props) => (props.right ? `${props.right}` : "unset")};
  bottom: ${(props) => (props.bottom ? `${props.bottom}` : "unset")};
  box-sizing: border-box;
  height: ${(props) => (props.height ? `${props.height}` : "unset")};
  z-index: ${(props) => (props.index ? `${props.index}` : "unset")};
  display: ${(props) => (props.display ? `${props.display}` : "block")};
  display: ${(props) => (props.flex && "flex")};
  overflow: ${(props) => props.overflow && props.overflow};
  overflow-y: ${(props) => props.overflowy && props.overflowy};
  overflow-x: ${(props) => props.overflowx && props.overflowx};
  visibility: ${(props) =>
    props.visibility ? `${props.visibility}` : "unset"};
  flex-direction: ${(props) =>
    props.flexdirection ? `${props.flexdirection}` : "unset"};
  content: ${(props) => (props.content ? `${props.content}` : "")};
  align-items: ${(props) =>
    props.alignitems ? `${props.alignitems}` : "unset"};
  justify-content: ${(props) =>
    props.justifycontent ? `${props.justifycontent}` : "unset"};
  align-content: ${(props) =>
    props.aligncontent ? `${props.aligncontent}` : "unset"};
  gap: ${(props) => (props.gap ? `${props.gap}` : "unset")};
  transform: ${(props) => (props.transform ? `${props.transform}` : "unset")};
  grid-template-columns: ${(props) =>
    props.gridcolumn ? `${props.gridcolumn}` : "unset"};
  box-shadow: ${(props) => (props.shadow ? `${props.shadow}` : "unset")};
  font-weight: ${(props) => (props.heavy ? "700" : "400")};
  font-size: ${(props) => (props.size ? `${props.size}` : "20px")};
  flex: ${(props) => (props.flexratio ? `${props.flexratio}` : "unset")};
  cursor: ${(props) => props.cursor && "pointer"};

  &:hover {
    background-color: ${(props) => props.hoverbg && `${props.hoverbg}`};
    color: ${(props) =>
      props.hovercolor
        ? `${props.hovercolor}`
        : `${(props: any) => props.theme.black}`};
  }

  &::before {
    content: ${(props) => (props.bcontent ? `${props.bcontent}` : "")};
    position: ${(props) => (props.bposition ? `${props.bposition}` : "unset")};
    background-color: ${(props) =>
      props.bbg ? `${props.bbg}` : "transparent"};
    width: ${(props) => (props.bwidth ? `${props.bwidth}` : "unset")};
    height: ${(props) => (props.bheight ? `${props.bheight}` : "unset")};
    top: ${(props) => (props.btop ? `${props.btop}` : "unset")};
    transform: ${(props) =>
      props.btransform ? `${props.btransform}` : "unset"};
    left: ${(props) => (props.bleft ? `${props.bleft}` : "unset")};
    align-items: ${(props) => props.balignitems && `${props.balignitems}`};
    justify-content: ${(props) =>
      props.bjustifycontent && `${props.bjustifycontent}`};
  }

  @media screen and (max-width: 1024px) {
    display: ${(props) => props.mddisplay && `${props.mddisplay}`};
    grid-template-columns: ${(props) =>
      props.mdgridcolumn && `${props.mdgridcolumn}`};
    flex-direction: ${(props) =>
      props.mdflexdirection && `${props.mdflexdirection}`};
    width: ${(props) => props.mdwidth && `${props.mdwidth}`};
    height: ${(props) => props.mdheight && `${props.mdheight}`};
    gap: ${(props) => props.mdgap && `${props.mdgap}`};
    margin: ${(props) => props.mdmargin && `${props.mdmargin}`};
    padding: ${(props) => props.mdpadding && `${props.mdpadding}`};
    border-radius: ${(props) => props.mdradius && `${props.mdradius}`};
    align-items: ${(props) => props.mdalignitems && `${props.mdalignitems}`};
    justify-content: ${(props) =>
      props.mdjustifycontent && `${props.mdjustifycontent}`};
  }

  @media screen and (max-width: 600px) {
    display: ${(props) => props.smdisplay && `${props.smdisplay}`};
    grid-template-columns: ${(props) =>
      props.smgridcolumn && `${props.smgridcolumn}`};
    flex-direction: ${(props) =>
      props.smflexdirection && `${props.smflexdirection}`};
    width: ${(props) => props.smwidth && `${props.smwidth}`};
    gap: ${(props) => props.smgap && `${props.smgap}`};
    margin: ${(props) => props.smmargin && `${props.smmargin}`};
    padding: ${(props) => props.smpadding && `${props.smpadding}`};
    border-radius: ${(props) => props.smradius && `${props.smradius}`};
  }
`;

export const Image = styled.img<IImageProps>`
  margin: ${(props) => props.margin && `${props.margin}`};
  width: ${(props) => (props.width ? `${props.width}` : "unset")};
  height: ${(props) => (props.height ? `${props.height}` : "unset")};
  aspect-ratio: ${(props) => props.ratio && "1"};
  display: ${(props) => (props.display ? `${props.display}` : "unset")};
  position: ${(props) => (props.position ? `${props.position}` : "unset")};
  top: ${(props) => (props.top ? `${props.top}` : "unset")};
  left: ${(props) => (props.left ? `${props.left}` : "unset")};
  right: ${(props) => (props.right ? `${props.right}` : "unset")};
  bottom: ${(props) => (props.bottom ? `${props.bottom}` : "unset")};
  transform: ${(props) => (props.transform ? `${props.transform}` : "unset")};

  @media screen and (max-width: 1024px) {
    width: ${(props) => props.mdwidth && `${props.mdwidth}`};
    height: ${(props) => (props.mdheight ? `${props.mdheight}` : "unset")};
    margin: ${(props) => props.mdmargin && `${props.mdmargin}`};
  }
  @media screen and (max-width: 1024px) {
    width: ${(props) => props.mdwidth && `${props.mdwidth}`};
    margin: ${(props) => props.mdmargin && `${props.mdmargin}`};
  }
`;

export const LinkText = styled(Link)<ILinkProps>`
  font-size: ${(props) => (props.size ? `${props.size}` : "20px")};
  font-style: ${(props) => props.italics && "italics"};
  text-decoration: ${(props) => props.underline && "underline"};
  display: ${(props) => props.display && `${props.display}`}
  font-weight: ${(props) => (props.heavy ? "600" : "400")};
  color: ${(props) => (props.color ? `${props.color}` : primaryColor)};
  background-color: ${(props) => (props.bg ? `${props.bg}` : "transparent")};
  border-radius: ${(props) => (props.radius ? `${props.radius}` : "0px")};
  width: ${(props) => props.width && `${props.width}`};
  height: ${(props) => (props.height ? `${props.height}` : "unset")};
  text-align: ${(props) => (props.align ? `${props.align}` : "left")};
  align-items: ${(props) =>
    props.alignitems ? `${props.alignitems}` : "unset"};
  padding: ${(props) => (props.padding ? `${props.padding}` : "0px")};
  margin: ${(props) => (props.margin ? `${props.margin}` : "0px")};
  flex: ${(props) => (props.flex ? `${props.flex}` : "unset")};

  &:hover {
    color: ${(props) => props.hcolor && `${props.hcolor}`};
  }

  @media screen and (max-width: 1024px) {
    width: ${(props) => props.mdwidth && `${props.mdwidth}`};
    font-size: ${(props) => props.mdsize && `${props.mdsize}`};
  }
  @media screen and (max-width: 600px) {
    width: ${(props) => props.smwidth && `${props.smwidth}`};
    font-size: ${(props) => props.smsize && `${props.smsize}`};
  }
`;

export const Divider = styled("hr")<IDividerProps>`
  border: ${(props) => (props.size ? `${props.size}` : "1px")} solid
    ${(props) => (props.color ? `${props.color}` : primaryColor)};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  transform: ${(props) => props.vertical && "rotate(-90deg)"};
  width: ${(props) => props.vertical && `${props.size}`};
`;

export const TextField = styled("input")<IInputProps>`
  box-sizing: border-box;
  border-radius: ${(props) => props.radius && props.radius};
  margin-left: ${(props) => (props.mleft ? `${props.mleft}` : "0px")};
  margin-right: ${(props) => (props.mright ? `${props.mright}` : "0px")};
  flex: ${(props) => (props.flex ? `${props.flex}` : "unset")};
  margin-top: ${(props) => (props.mtop ? `${props.mtop}` : "0px")};
  margin-bottom: ${(props) => (props.mbottom ? `${props.mbottom}` : "0px")};
  border: ${(props) => (props.size ? `${props.size}` : "1px")} solid
    ${(props) => (props.border ? `${props.border}` : primaryColor)};
  border: ${(props) => props.noborder && "none"};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "48px")};
  background: ${(props) => (props.bg ? `${props.bg}` : whiteColor)};
  outline: none;
  font-style: normal;
  line-height: 32px;
  color: ${(props) => (props.color ? `${props.color}` : primaryColor)};
  padding: ${(props) => (props.padding ? `${props.padding}` : "16px 15px")};
  transition: 0.5s;

  &::placeholder {
    color: ${(props) => (props.pcolor ? `${props.pcolor}` : grayColor)};
  }

  &:hover {
    border: ${(props) =>
      props.hborder ? `${props.hborder}` : "1px solid #03a63c"};
  }

  width: ${(props) => props.lgWidth && `${props.lgWidth}`};
  @media screen and (max-width: 1024px) {
    width: ${(props) => props.mdWidth && `${props.mdWidth}`};
  }
  @media screen and (max-width: 600px) {
    width: ${(props) => props.smWidth && `${props.smWidth}`};
  }
`;

export const InputLabel = styled.label<ITextProps>`
  color: ${(props) => (props.color ? `${props.color}` : primaryColor)};
  font-size: ${(props) => (props.size ? `${props.size}` : "0px")};
  margin-left: ${(props) => (props.mleft ? `${props.mleft}` : "0px")};
  margin-right: ${(props) => (props.mright ? `${props.mright}` : "0px")};
  margin-top: ${(props) => (props.mtop ? `${props.mtop}` : "0px")};
  margin-bottom: ${(props) => (props.mbottom ? `${props.mbottom}` : "0px")};
  padding-left: ${(props) => (props.pleft ? `${props.pleft}` : "0px")};
  padding-right: ${(props) => (props.pright ? `${props.pright}` : "0px")};
  padding-top: ${(props) => (props.ptop ? `${props.ptop}` : "0px")};
  padding-bottom: ${(props) => (props.pbottom ? `${props.pbottom}` : "0px")};
  dispaly: block;

  @media screen and (max-width: 1024px) {
    font-size: ${(props) => props.mdsize && `${props.mdsize}`};
  }
`;

export const TextAreaField = styled("textarea")<IInputProps>`
  box-sizing: border-box;
  resize: none;
  border-radius: 10px;
  color: ${(props) => (props.color ? `${props.color}` : primaryColor)};
  font-size: ${(props) => (props.size ? `${props.size}` : "0px")};
  margin-left: ${(props) => (props.mleft ? `${props.mleft}` : "0px")};
  margin-right: ${(props) => (props.mright ? `${props.mright}` : "0px")};
  margin-top: ${(props) => (props.mtop ? `${props.mtop}` : "0px")};
  margin-bottom: ${(props) => (props.mbottom ? `${props.mbottom}` : "0px")};
  border: ${(props) => (props.size ? `${props.size}` : "1px")} solid
    ${(props) => (props.border ? `${props.border}` : "transparent")};
  border: ${(props) => props.noborder && "none"};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "10em")};
  outline: none;
  font-style: normal;
  // font-weight: 600;
  font-family: "Inter", sans-serif;
  line-height: 32px;
  background: ${(props) => (props.bg ? `${props.bg}` : whiteColor)};
  &::placeholder {
    color: ${(props) => (props.pcolor ? `${props.pcolor}` : grayColor)};
  }

  transition: 0.5s;
  &:hover {
    // border-bottom: 1px solid ${accentColor};
  }

  width: ${(props) => props.lgWidth && `${props.lgWidth}`};
  @media screen and (max-width: 1024px) {
    width: ${(props) => props.mdWidth && `${props.mdWidth}`};
  }
  @media screen and (max-width: 600px) {
    width: ${(props) => props.smWidth && `${props.smWidth}`};
  }
`;

export const Text = styled.p<ITextProps>`
  font-size: ${(props) => (props.size ? `${props.size}` : "18px")};
  font-weight: ${(props) => (props.heavy ? "700" : "500")};
  line-height: ${(props) => props.lineheight && `${props.lineheight}`};
  text-align: ${(props) => props.center && "center"};
  color: ${(props) => props.color && `${props.color}`};
  cursor: ${(props) => props.cursor && "pointer"};
  width: ${(props) => (props.width ? `${props.width}` : "unset")};
  height: ${(props) => (props.height ? `${props.height}` : "unset")};
  padding-top: ${(props) => (props.ptop ? `${props.ptop}` : "0px")};
  padding-right: ${(props) => (props.pright ? `${props.pright}` : "0px")};
  padding-bottom: ${(props) => (props.pbottom ? `${props.pbottom}` : "0px")};
  padding-left: ${(props) => (props.pleft ? `${props.pleft}` : "0px")};
  margin-top: ${(props) => (props.mtop ? `${props.mtop}` : "0px")};
  margin-right: ${(props) => (props.mright ? `${props.mright}` : "0px")};
  margin-bottom: ${(props) => (props.mbottom ? `${props.mbottom}` : "0px")};
  margin-left: ${(props) => (props.mleft ? `${props.mleft}` : "0px")};
  // border: ${(props) => (props.size ? `${props.size}` : "1px")} solid
  //   ${(props) => (props.border ? `${props.border}` : "#000000")};
  background-color: ${(props) => (props.bg ? `${props.bg}` : "transparent")};
  border-radius: ${(props) => (props.radius ? `${props.radius}` : "0px")};
  margin: ${(props) => (props.margin ? `${props.margin}` : "0px")};
  padding: ${(props) => (props.padding ? `${props.padding}` : "0px")};
  // flex: ${(props) => (props.flex ? `${props.flex}` : "unset")};

  &:hover {
    color: ${(props) => props.hovercolor && `${props.hovercolor}`};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${(props) => props.mdsize && `${props.mdsize}`};
    margin: ${(props) => (props.mdmargin ? `${props.mdmargin}` : "0px")};
    padding: ${(props) => props.mdpadding && `${props.mdpadding}`};
    text-align: ${(props) => props.mdtextalign && `${props.mdtextalign}`};
    line-height: ${(props) => props.mdlineheight && `${props.mdlineheight}`};
  }
  @media screen and (max-width: 600px) {
    font-size: ${(props) => props.smsize && `${props.smsize}`};
  }
`;

export const TitleText = styled.h3<ITextProps>`
  font-size: ${(props) => (props.size ? `${props.size}` : "20px")};
  font-weight: ${(props) => (props.heavy ? "700" : "400")};
  text-align: ${(props) => props.center && "center"};
  line-height: ${(props) => props.lineheight && `${props.lineheight}`};
  color: ${(props) => props.color && `${props.color}`};
  cursor: ${(props) => props.cursor && "pointer"};
  width: ${(props) => (props.width ? `${props.width}` : "unset")};
  margin-top: ${(props) => (props.mtop ? `${props.mtop}` : "0px")};
  margin-right: ${(props) => (props.mright ? `${props.mright}` : "0px")};
  margin-bottom: ${(props) => (props.mbottom ? `${props.mbottom}` : "0px")};
  margin-left: ${(props) => (props.mleft ? `${props.mleft}` : "0px")};
  // border: ${(props) => (props.size ? `${props.size}` : "1px")} solid
  //   ${(props) => (props.border ? `${props.border}` : "#000000")};
  background-color: ${(props) => (props.bg ? `${props.bg}` : "transparent")};
  border-radius: ${(props) => (props.radius ? `${props.radius}` : "0px")};
  margin: ${(props) => (props.margin ? `${props.margin}` : "0px")};
  padding: ${(props) => (props.padding ? `${props.padding}` : "0px")};

  &:hover {
    color: ${(props) => props.hovercolor && `${props.hovercolor}`};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${(props) => props.mdsize && `${props.mdsize}`};
    line-height: ${(props) => props.mdlineheight && `${props.mdlineheight}`};
    margin: ${(props) => props.mdmargin && `${props.mdmargin}`};
    padding: ${(props) => props.mdpadding && `${props.mdpadding}`};
    text-align: ${(props) => props.mdtextalign && props.mdtextalign};
  }
  @media screen and (max-width: 600px) {
    font-size: ${(props) => props.smsize && `${props.smsize}`};
    line-height: ${(props) => props.smlineheight && `${props.smlineheight}`};
    margin: ${(props) => props.smmargin && `${props.smmargin}`};
    text-align: ${(props) => props.smtextalign && props.smtextalign};
  }
`;

export const SelectField = styled("select")<IInputProps>`
  box-sizing: border-box;
  border-radius: ${(props) => (props.radius ? props?.radius : "5px")};
  margin-left: ${(props) => (props.mleft ? `${props.mleft}` : "0px")};
  margin-right: ${(props) => (props.mright ? `${props.mright}` : "0px")};
  margin-top: ${(props) => (props.mtop ? `${props.mtop}` : "0px")};
  margin-bottom: ${(props) => (props.mbottom ? `${props.mbottom}` : "0px")};
  border: ${(props) => (props.size ? `${props.size}` : "1px")} solid
    ${(props) => (props.border ? `${props.border}` : primaryColor)};
  border: ${(props) => props.noborder && "none"};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "48px")};
  background: ${(props) => (props.bg ? `${props.bg}` : whiteColor)};
  outline: none;
  font-style: normal;
  line-height: 32px;
  padding: 1px 2.5px;
  font-weight: ${(props) => (props.heavy ? "bold" : "normal")};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "3.5em")};
  margin-top: ${(props) => (props.mtop ? `${props.mtop}` : "0px")};
  margin-bottom: ${(props) => (props.mbottom ? `${props.mbottom}` : "0px")};
  outline: none;

  color: ${(props) => (props.color ? `${props.color}` : primaryColor)};

  width: ${(props) => props.lgWidth && `${props.lgWidth}`};
  @media screen and (max-width: 1024px) {
    width: ${(props) => props.mdWidth && `${props.mdWidth}`};
  }
  @media screen and (max-width: 600px) {
    width: ${(props) => props.smWidth && `${props.smWidth}`};
  }
`;

export const InnerSection = styled.div<ICardProps>`
  display: block;
  max-width: 1440px;
  width: 86%;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 94%;
  }
`;

export const MainSection = styled("section")<ICardProps>`
  width: ${(props) => props.width && `${props.width}`};
  display: ${(props) => props.display && `${props.display}`};
  max-width: ${(props) => props.maxwidth && `${props.maxwidth}`};
  top: ${(props) => (props.top ? `${props.top}` : "unset")};
  left: ${(props) => (props.left ? `${props.left}` : "unset")};
  right: ${(props) => (props.right ? `${props.right}` : "unset")};
  bottom: ${(props) => (props.bottom ? `${props.bottom}` : "unset")};
  box-sizing: border-box;
  position: ${(props) => (props.position ? `${props.position}` : "unset")};
  margin-top: ${(props) => (props.mtop ? `${props.mtop}` : "0px")};
  margin-bottom: ${(props) => (props.mbottom ? `${props.mbottom}` : "0px")};
  margin-left: ${(props) => props.mleft && `${props.mleft}`};
  margin-right: ${(props) => props.mright && `${props.mright}`};
  padding-top: ${(props) => (props.ptop ? `${props.ptop}` : "0px")};
  padding-bottom: ${(props) => (props.pbottom ? `${props.pbottom}` : "0px")};
  padding-left: ${(props) => props.pleft && `${props.pleft}`};
  padding-right: ${(props) => props.pright && `${props.pright}`};
  background: ${(props) => props.bg && props.bg};
  //   height: 100%;
  height: ${(props) => props.height && props.height};

  overflow-y: ${(props) => props.overflowy && props.overflowy};
  overflow-x: ${(props) => props.overflowx && props.overflowx};
  z-index: ${(props) => (props.index ? `${props.index}` : "unset")};
  ::-webkit-scrollbar {
    display: none;
  }

  margin-left: auto;
  margin-right: auto;
  //   width: 90%;

  @media screen and (max-width: 1024px) {
    display: ${(props) => props.mddisplay && `${props.mddisplay}`};
    margin: ${(props) => props.mdmargin && `${props.mdmargin}`};
  }
  @media screen and (max-width: 600px) {
    display: ${(props) => props.smdisplay && `${props.smdisplay}`};
    margin: ${(props) => props.smmargin && `${props.smmargin}`};
  }
`;

export const Circle = styled("div")<ICardProps>`
  position: ${(props) => (props.position ? `${props.position}` : "unset")};
  height: ${(props) => (props.height ? `${props.height}` : "3em")};
  width: ${(props) => (props.height ? `${props.height}` : "3em")};
  background: ${(props) => (props.bg ? `${props.bg}` : primaryColor)};
  color: ${(props) => (props.color ? `${props.color}` : "white")};
  content: ${(props) => (props.content ? `${props.content}` : "''")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  align-self: center;
  cursor: ${(props) => props.cursor && "pointer"};
  border: ${(props) => (props.border ? `${props.border}` : "none")};
  margin-left: ${(props) => (props.mleft ? `${props.mleft}` : "none")};
  margin-right: ${(props) => (props.mright ? `${props.mright}` : "none")};
  top: ${(props) => (props.top ? `${props.top}` : "unset")};
  left: ${(props) => (props.left ? `${props.left}` : "unset")};
  right: ${(props) => (props.right ? `${props.right}` : "unset")};
  bottom: ${(props) => (props.bottom ? `${props.bottom}` : "unset")};
  filter: ${(props) => (props.filter ? `${props.filter}` : "unset")};
  z-index: ${(props) => (props.index ? `${props.index}` : "unset")};

  @media screen and (max-width: 1024px) {
    display: ${(props) => props.mddisplay && `${props.mddisplay}`};
  }
`;

export const Button = styled("button")<ICardProps>`
  color: ${(props) => props.color && `${props.color}`};
  background: ${(props) => props.bg && `${props.bg}`};
  width: ${(props) => props.width && `${props.width}`};
  height: ${(props) => props.height && `${props.height}`};
  margin-top: ${(props) => (props.mtop ? `${props.mtop}` : "0px")};
  margin-bottom: ${(props) => (props.mbottom ? `${props.mbottom}` : "0px")};
  margin-left: ${(props) => (props.center ? "auto" : "0px")};
  margin-right: ${(props) => (props.center ? "auto" : "0px")};
  border-radius: ${(props) => (props.radius ? `${props.radius}` : "10px")};
  box-sizing: border-box;
  display: ${(props) => props.display && `${props.display}`};
  align-items: ${(props) => props.alignitems && `${props.alignitems}`};
  gap: ${(props) => props.gap && `${props.gap}`};
  font-size: ${(props) => props.size && `${props.size}`};
  border: ${(props) => props.border && `${props.border}`};
  font-weight: ${(props) => props.heavy && "bold"};
  margin-left: ${(props) => props.left && `${props.left}`};
  margin-right: ${(props) => props.right && `${props.right}`};
  padding: ${(props) => props.padding && `${props.padding}`};
  line-height: ${(props) => props.lineheight && `${props.lineheight}`};
  cursor: pointer;
  outline: none;
  transition: 0.5s opacity;
  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 1024px) {
    padding: ${(props) => props.mdpadding && `${props.mdpadding}`};
    display: ${(props) => props.mddisplay && `${props.mddisplay}`};
    font-size: ${(props) => props.mdsize && `${props.mdsize}`};
    line-height: ${(props) => props.mdlineheight && `${props.mdlineheight}`};
    border-radius: ${(props) => props.mdradius && `${props.mdradius}`};
  }
`;
