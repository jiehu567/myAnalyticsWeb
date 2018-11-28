import * as React from "react";
import "./Shell.scss";
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Sider } = Layout;

export class Shell extends React.Component<{}, {}> {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed: boolean) => {
        this.setState({ collapsed });
    }
    render() {
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Header className="header">
                    <div className="logo" />
                    <h1 style={{ color: "white" }}>Jie's Analytics</h1>
                </Header>
                <Layout>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop" />
                                <span>Option 2</span>
                            </Menu.Item>
                            <Menu.Item key="9">
                                <Icon type="file" />
                                <span>File</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Content style={{ background: "#fff", padding: 24, margin: 0, minHeight: 280 }}>
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
