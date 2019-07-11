import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Col, Row, Table } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import Forgeviewer from "../../presentational/Forgeviewer/Forgeviewer";

import setActivePackage from "../../../store/actions/setActivePackage/setActivePackage";

import "./UserPackages.css";

const UserPackages = ({
  packages,
  setActivePackage,
  activePackage,
  activeRequisition
}) => {
  useEffect(
    () => {
      packages.data.length &&
        !Object.keys(activePackage).length &&
        setActivePackage(packages.data[0]);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [packages]
  );

  const theadEls =
    activePackage &&
    packages.data.map(item => (
      <th key={item.id} onClick={() => setActivePackage(item)}>
        <span className={activePackage.id === item.id ? "active-span" : ""}>
          {item.name}
        </span>
      </th>
    ));

  const tbodyEls = packages.data.map((item, index) => (
    <td key={item.id}>
      {" "}
      <div className="dot" />{" "}
    </td>
  ));

  const fPriceEls = packages.data.map(item => (
    <td key={item.id}>
      <b>{item.price}</b>
    </td>
  ));

  const area =
    activeRequisition && activeRequisition.area ? activeRequisition.area : 80;

  return activeRequisition ? (
    <Col xs={12} xl={9} className="packages">
      <Row className="pack-top">
        <Col md={8}>
          <Forgeviewer />
        </Col>
        <Col md={4}>
          <div>
            <div className="pack-data">
              <span>Объект</span>
              <span>{activeRequisition.bona_lvu_name}</span>
            </div>
            <div className="pack-data">
              <span>№ квартиры </span>
              <span>3.N1.043</span>
            </div>
            <div className="pack-data">
              <span>Площадь</span>
              <span>{area} м²</span>
            </div>
            <div className="pack-data">
              <span>Этаж</span>
              <span>{activeRequisition.flor}</span>
            </div>
            <div className="pack-data">
              <span>Спальни</span>
              <span>{activeRequisition.name}</span>
            </div>
            <div className="pack-data">
              <span>Стоимость отделки</span>
              <span>{parseInt(area * activeRequisition.price)} ₽</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <PerfectScrollbar>
          <Table responsive>
            <thead>
              <tr>
                <th />
                {theadEls}
              </tr>
            </thead>
            <tbody>
              <tr className="parent-tr">
                <td>Помещение:</td>
              </tr>
              <tr>
                <td className="child-td">Сан/узел</td>
                {tbodyEls}
              </tr>
              <tr>
                <td className="child-td">Ванная</td>
                {tbodyEls}
              </tr>
              <tr>
                <td className="child-td">Балкон</td>
                {tbodyEls}
              </tr>
              <tr>
                <td className="child-td">Комнаты</td>
                {tbodyEls}
              </tr>
              <tr>
                <td className="child-td">Кухня</td>
                {tbodyEls}
              </tr>
              <tr className="parent-tr">
                <td>Материалы:</td>
              </tr>
              <tr>
                <td className="child-td">Паркет</td>
                {tbodyEls}
              </tr>
              <tr>
                <td className="child-td">Плитка</td>
                {tbodyEls}
              </tr>
              <tr>
                <td className="child-td">
                  <b>Цена за 1 м2</b>
                </td>
                {fPriceEls}
              </tr>
              <tr>
                <td className="child-td">
                  <b>
                    <p>Стоимость</p>
                    <p>отделки</p>
                  </b>
                </td>
                {packages.data.map(item => (
                  <td key={item.id}>
                    <b>
                      {area * activePackage.price ? activePackage.price : 1}
                    </b>
                  </td>
                ))}
              </tr>
            </tbody>
          </Table>
        </PerfectScrollbar>
      </Row>
    </Col>
  ) : null;
};

const mapStateToProps = ({ tree, type }) => ({
  packages: tree.packages,
  activePackage: type.activePackage,
  activeRequisition: type.currentRequisition
});

export default connect(
  mapStateToProps,
  { setActivePackage }
)(UserPackages);
