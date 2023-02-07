import styled from "styled-components";
import ListJson from "../json/detail.json";
import { FloatingLabel, Form,Container} from 'react-bootstrap';
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import LogoCollection from "../assets/cryptologs-black.png"

const Box = styled.div`

`

const CardBox = styled.div`
  background: #FFFFFF;
  border-radius: 20px;
  border: 1px solid #EDEFF0;
  padding: 30px;
`

const UlBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  li{
    width: 25%;
    text-align: center;
    margin-bottom: 40px;
    cursor: pointer;
    .imgBox{
      width: 100px;
      height: 100px;
      margin:0 auto 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        max-width: 100px;
        max-height:100px ;
      }
    }
  }
`

const ContentBox = styled(Container)`
    margin: 10px auto 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Lft = styled.div`
    display: flex;
  align-items: center;
  //margin-left: -20px;
  .imgBox{
    width: 96px;
    height: 96px;
    background: #fff;
    border-radius: 20px;
    border: 1px solid #EDEFF0;
    padding: 13px;
    margin-right: 16px;
    box-sizing: border-box;
    img{
      max-width: 100%;
      max-height: 100%;
    }
  }
`

const TitleBox = styled.div`
  font-family: Helvetica;
  font-size: 16px;
  .tit{
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
  }
`

const SearchBox = styled.div`
  margin: 0 ;
  width: 40%;
`

export default function List(){
    const navigate = useNavigate();
    const [ logoName, setLogoName] = useState('');
    const [currentList, setCurrentList ] = useState([]);
    const [initList, setInitList ] = useState([]);

    useEffect(()=>{
        let arr = [];
        ListJson.map((item)=>{
            const nameStr = item.name.toLowerCase().replace(/ /g,"-");
            const symbolStr = item.symbol.toLowerCase().replace(/ /g,"");
            let name = `${nameStr}-${symbolStr}`
            const png = `${name}.png`;
            arr.push({
                name: item.name,
                symbol: item.symbol,
                png
            });
        })
        setInitList(arr);
        setCurrentList(arr);
    },[])

    useEffect(()=>{
        if(!logoName.length) return;
        const mylist = initList.filter(item => item.name.toLowerCase().indexOf(logoName.toLowerCase()) > -1 || item.symbol.toLowerCase().indexOf(logoName.toLowerCase()) > -1);
        setCurrentList(mylist);
    },[logoName])

    const handleChange = (e) =>{
        setLogoName(e.target.value);
    }
    const handleClick = (index)=>{
        navigate(`/detail/${index}`)
    }

    return <Box>
        <ContentBox>
            <Lft>
                <div className="imgBox"><img src={LogoCollection} alt=""/></div>
                <TitleBox>
                    <div className="tit">Logo Collection</div>
                    <div>High Quality Cryptocurrency Logos</div>
                </TitleBox>
            </Lft>
            <SearchBox>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Search logo"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="Search" value={logoName} onChange={(e)=>handleChange(e)}/>
                </FloatingLabel>
            </SearchBox>
        </ContentBox>

        <CardBox>
            <UlBox>
                {
                    currentList.map((item,index)=>( <li key={index} onClick={()=>handleClick(index)}>
                        <div className="imgBox">
                            {/*<img src={require(item.png).default} alt=""/>*/}
                            <img src={require(`../assets/downImg/${item.png}`)} alt=""/>
                        </div>
                        <div>
                            {item.name}-{item.symbol}
                        </div>
                    </li>))
                }

            </UlBox>
        </CardBox>
    </Box>
}