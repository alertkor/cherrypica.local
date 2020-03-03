import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {Container, Row, Col} from 'styled-bootstrap-grid';
const InstagramIcon = require('../../assets/files/icon/ico-instagram.svg');
const FacebookIcon = require('../../assets/files/icon/ico-facebook.svg');
const YoutubeIcon = require('../../assets/files/icon/ico-youtube.svg');

const Root = styled.div`
    height: 32rem;
    border-top: 1px solid #e7e7e7;
    padding-left: 2rem;
    padding-top: 2.1rem;
`;

const CompanyName = styled.span`
  opacity: 0.8;
  font-family: Montserrat;
  font-size: 1.6rem;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  color: #000000;
`;

const DetailContainer = styled.div`
    margin-top: 2rem;
`;

const CompanyCall = styled.div`
  opacity: 0.6;
  font-family: Montserrat;
  font-size: 1.2rem;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  color: #000000;
  text-decoration: underline;
`;

const CompanyInfo = styled.div`
  opacity: 0.6;
  font-family: Montserrat;
  font-size: 1.2rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  color: #000000;
`;

const ReturnHeader = styled.div`
    margin-top: 1.2rem;
    opacity: 0.6;
    font-family: Montserrat;
    font-size: 1.2rem;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    color: #000000;
`;

const Address = styled.div`
    opacity: 0.6;
    font-family: AppleSDGothicNeo;
    font-size: 1.1rem;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    color: #000000;
`;

const Label = styled(Col)`
  opacity: 0.4;
  font-family: AppleSDGothicNeo;
  font-size: 1rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  color: #000000;
  padding: 0;
`;

const Content = styled(Col)`
  opacity: 0.4;
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  color: #000000;
  padding-left: 0;
`;

const SubContainer = styled.div`
    margin-top: 2rem;
    text-align: right;
`;

const SubUrl = styled(Link)`
  opacity: 0.6;
  font-family: Montserrat;
  font-size: 1.2rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #000000;
  text-decoration: none;
  margin-right: 2rem;
`;

const Icon = styled.img`
    text-align: right;
    margin-right: 2rem;
`;

const IconWrapper = styled.span`
    float: right;
`;

const OpenLink = styled.a`
    color: #000000;
    text-decoration: none;
`;

export default function MobileFooter(props) {
    return (
        <React.Fragment>
            <Root>
                <div>
                    <CompanyName>
                        (주) 체리피카
                    </CompanyName>
                    <IconWrapper>
                        <a target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/cherrypica_official/"}>
                            <Icon src={InstagramIcon}/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={"https://www.facebook.com/cherrypica.shop/"}>
                            <Icon src={FacebookIcon}/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={"https://www.facebook.com/cherrypica.shop/"}>
                            <Icon src={YoutubeIcon}/>
                        </a>
                    </IconWrapper>
                </div>
                <DetailContainer>
                    <CompanyCall>02 568 8981</CompanyCall>
                    <CompanyInfo>AM 10:00 ~ PM 17:00 , Off-time 12:30 ~ 13:30<br/>(주말 및 공휴일 제외)</CompanyInfo>
                    <ReturnHeader>RETURN & EXCHANGE</ReturnHeader>
                    <Address>서울특별시 강남구 영동대로85길 34 스파크플러스 삼성2호점 5층 체리피카</Address>

                    <Container className={"mx-0 mt-4"}>
                        <Row>
                            <Label md={2} sm={3} xs={3}>주소</Label>
                            <Content md={9} sm={5} xs={9}>서울특별시 성동구 성수이로 7가길 13 (태진섬유) 1층</Content>
                        </Row>
                        <Row>
                            <Label md={2} sm={3} xs={3}>대표</Label>
                            <Content md={9} sm={5} xs={5}>정두선</Content>
                        </Row>
                        <Row>
                            <Label md={2} sm={3} xs={3}>사업자등록번호</Label>
                            <Content md={9} sm={5} xs={6}>896-88-00938 <OpenLink target="_blank" href={"http://www.ftc.go.kr/bizCommPop.do?wrkr_no=8968800938"}>[사업자정보확인]</OpenLink></Content>
                        </Row>
                        <Row>
                            <Label md={2} sm={3} xs={3}>통신판업신고번호</Label>
                            <Content md={9} sm={5} xs={5}>2019-서울중구-0846</Content>
                        </Row>
                        <Row>
                            <Label md={2} sm={3} xs={3}>메일</Label>
                            <Content md={9} sm={5} xs={5}>help@cherrypica.com</Content>
                        </Row>
                    </Container>
                </DetailContainer>
                <SubContainer>
                    <SubUrl to={"login"}>고객센터</SubUrl>
                    <SubUrl to={"login"}>회사소개</SubUrl>
                    <SubUrl to={"login"}>이용약관</SubUrl>
                    <SubUrl to={"login"}>개인정보처리방침</SubUrl>
                </SubContainer>
            </Root>
        </React.Fragment>
    )
};