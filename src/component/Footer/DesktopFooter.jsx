import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {Container, Row, Col} from 'styled-bootstrap-grid';
const InstagramIcon = require('../../assets/files/icon/ico-instagram.svg');
const FacebookIcon = require('../../assets/files/icon/ico-facebook.svg');
const YoutubeIcon = require('../../assets/files/icon/ico-youtube.svg');

const Root = styled.div`
    height: 20.6rem; 
    border-top: 1px solid #e7e7e7;
    padding-top: 2.9rem;
`;

const CompanyName = styled.div`
    opacity: 0.8;
    font-family: Montserrat;
    font-size: 1.6rem;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: -0.5px;
    color: #000000;
`;

const CompanyInfo = styled.div`
    margin-top: .8rem;
  opacity: 0.6;
  font-family: AppleSDGothicNeo;
  font-size: 1.4rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #000000;
`;

const ReturnInfo = styled.div`
  opacity: 0.6;
  font-family: AppleSDGothicNeo;
  font-size: 1.3rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.54;
  letter-spacing: normal;
  color: #000000;
`;

const DetailInfo = styled.div`
    margin-top: 1.8rem;
  opacity: 0.4;
  font-family: AppleSDGothicNeo;
  font-size: 1.2rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #000000;
`;

const Header = styled.div`
  opacity: 0.8;
  margin-bottom: .8rem;
  font-family: AppleSDGothicNeo;
  font-size: 1.4rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: -0.44px;
  color: #000000;
  text-align: right;
`;

const SubUrl = styled(Link)`
    display: block;
  opacity: 0.6;
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: right;
  color: #000000;
  text-decoration: none;
`;

const IconRow = styled(Row)`
    margin-top: 3.4rem;
    text-align: right;
`;

const Icon = styled.img`
`;

const Href = styled.a`
    margin-right: 2rem;
    &:last-child {
        margin-right: 0;
    }
`;

const OpenLink = styled.a`
    color: #000000;
    text-decoration: none;
`;

export default function DesktopFooter(props) {
    return (
        <React.Fragment>
            <Root>
                <Container>
                    <Row>
                        <Col col={8}>
                            <CompanyName>(주) 체리피카</CompanyName>
                            <CompanyInfo><b>02 568 8981</b>   |   AM 10:00 ~ PM 17:00 , Off-time 12:30 ~ 13:30 (주말 및 공휴일 제외)</CompanyInfo>
                            <ReturnInfo><b>RETURN & EXCHANGE</b>   서울특별시 강남구 영동대로85길 34 스파크플러스 삼성2호점 5층 체리피카</ReturnInfo>
                            <DetailInfo>주소 서울특별시 성동구 성수이로 7가길 13 (태진섬유) 1층   |   대표  정두선<br/>
                                사업자등록번호  896-88-00938   |   통신판매업신고  2019-서울중구-0846  <OpenLink target="_blank" href={"http://www.ftc.go.kr/bizCommPop.do?wrkr_no=8968800938"}>[사업자정보확인]</OpenLink><br/>
                                개인정보책임자  이민영   |   help@cherrypica.com<br/></DetailInfo>
                        </Col>
                        <Col col={4}>
                            <Row>
                                <Col col={6}>
                                    <Header>
                                        제휴문의
                                    </Header>
                                    <SubUrl to={"login"}>회사소개</SubUrl>
                                    <SubUrl to={"login"}>이용약관</SubUrl>
                                    <SubUrl to={"login"}>개인정보처리방침</SubUrl>
                                </Col>
                                <Col col={6}>
                                    <Header>
                                        고객센터
                                    </Header>
                                    <SubUrl to={"login"}>공지사항</SubUrl>
                                    <SubUrl to={"login"}>자주묻는질문</SubUrl>
                                    <SubUrl to={"login"}>1:1 문의</SubUrl>
                                </Col>
                            </Row>
                            <IconRow>
                                <Col col={12}>
                                    <Href target="_blank" href={"https://www.instagram.com/cherrypica_official/"}>
                                        <Icon src={InstagramIcon}/>
                                    </Href>
                                    <Href target="_blank" href={"https://www.facebook.com/cherrypica.shop/"}>
                                        <Icon src={FacebookIcon}/>
                                    </Href>
                                    <Href target="_blank" href={"https://www.youtube.com/channel/UCu-mWoD-EBxzPqfunTFLVJg"}>
                                        <Icon src={YoutubeIcon}/>
                                    </Href>
                                </Col>
                            </IconRow>
                        </Col>
                    </Row>
                </Container>
            </Root>
        </React.Fragment>
    )
};