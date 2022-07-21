import styled from "styled-components";
import ListJson from "../json/detail.json";
import { FloatingLabel, Form} from 'react-bootstrap';
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


const Box = styled.div`
  padding: 20px;
`

const UlBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li{
    width: 16%;
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

const SearchBox = styled.div`
    margin-bottom: 80px;
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
        <SearchBox>
            <FloatingLabel
                controlId="floatingInput"
                label="Search logo"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="Search" value={logoName} onChange={(e)=>handleChange(e)}/>
            </FloatingLabel>
        </SearchBox>
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
    </Box>
}