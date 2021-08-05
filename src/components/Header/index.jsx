import { Space, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

import i18n from "../../locales/index";
import { changeThemeAction } from "../../actions";

import * as Style from "./styles";

function Header(props) {
  const { history } = props;
  const { theme } = useSelector((state) => state.commonReducer);
  console.log(theme);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  function handleChangeLanguage(value) {
    i18n.changeLanguage(value);
  }

  const handleLogout = () => {
    // localStorage.removeItem("user");
    history.goBack();
  };

  return (
    <Style.HeaderContainer>
      <Space>
        <Style.Logo>LOGO</Style.Logo>
      </Space>
      <div>
        <Style.CustomSelect
          onChange={(value) => handleChangeLanguage(value)}
          value={i18n.language}
        >
          <Style.CustomSelect.Option value="vi">VI</Style.CustomSelect.Option>
          <Style.CustomSelect.Option value="en">EN</Style.CustomSelect.Option>
        </Style.CustomSelect>
        <Style.CustomSelect
          onChange={(value) => dispatch(changeThemeAction(value))}
          value={theme}
        >
          <Style.CustomSelect.Option value="light">Light</Style.CustomSelect.Option>
          <Style.CustomSelect.Option value="dark">Dark</Style.CustomSelect.Option>
        </Style.CustomSelect>
        <Space>
          <Button type="primary" onClick={() => handleLogout()}>
            {t("header.logOut")}
          </Button>
        </Space>
      </div>
    </Style.HeaderContainer>
  );
}

export default withRouter(Header);
