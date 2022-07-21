import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ListJson from "../json/detail.json";
import styled from "styled-components";
import { Button } from 'react-bootstrap';

const Box = styled.div`
    padding: 60px;
    height: 100%;
  flex-grow: 1;
`

const TitleBox  = styled.div`
    margin:0 40px 20px 20px ;
    //text-align: center;
    font-size: 18px;
    text-transform: uppercase;
`
const SymbolBox = styled.div`
    font-size: 14px;
    color: rgb(187, 187, 187);
    margin:0 0 20px 20px;
`

const ImgBox = styled.div`
    display: flex;
    align-items: center;
    border:1px solid #ced4da;
    padding: 50px;
    border-radius: 5px;
    img{
      width: 200px;
    }
`
const FirstLine = styled.div`
    display: flex;
  align-items: center;
  background: rgb(248, 248, 248);
  padding: 20px;
  text-transform: uppercase;
  margin-bottom: 40px;
`

const Btm = styled.div`
    display: flex;
    align-items: flex-start;
`
const Rht = styled.div`
  margin-left: 50px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  
  button{
    background-color: purple;
    color: white;
    &:focus{
      outline: none;
    }
    &:hover{
      background: #000;
      color: white;
    }
  }
  .btnTop{
    margin:0 40px 0 20px;
    background-color: black;
  }
`

export default function Detailpage(){
    const params = useParams();
    const [ detailInfo, setDetailInfo ] = useState(null);

    useEffect(()=>{
        if(params.type === undefined )return;

        const obj = ListJson[params.type];
        const nameStr = obj.name.toLowerCase().replace(/ /g,"-");
        const symbolStr = obj.symbol.toLowerCase().replace(/ /g,"");
        let name = `${nameStr}-${symbolStr}`
        const svg = `${name}.svg`;
        const png = `${name}.png`;
        obj.png = png;
        obj.svg = svg;


        setDetailInfo(obj)
    },[params]);


    return <div>
        {
            detailInfo != null &&<Box>

                <Btm>
                    <ImgBox>
                        <img src={require(`../assets/downImg/${detailInfo.png}`)} alt=""/>
                    </ImgBox>
                    <Rht>
                        <FirstLine>
                            {detailInfo.name}  Detail
                        </FirstLine>
                        <TitleBox>{detailInfo.name}</TitleBox>
                        <SymbolBox>
                            symbol: {detailInfo.symbol}
                        </SymbolBox>
                        <div>
                            <a href={require(`../assets/downImg/${detailInfo.png}`)} target="_blank"  rel="noreferrer" >
                                <Button variant="flat" className="btnTop">Download PNG</Button>
                            </a>
                            <a href={require(`../assets/downSVG/${detailInfo.svg}`)} target="_blank"  rel="noreferrer" >
                                <Button variant="flat" >Download SVG</Button>
                            </a>
                        </div>
                    </Rht>
                </Btm>

                <div>
                    {/*<img src={require(`../assets/downSVG/${detailInfo.svg}`)} alt=""/>*/}
                </div>
            </Box>
        }

    </div>
}