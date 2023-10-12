import styles from "./dashboard-header.module.css"

export default function DashboardHeader() {
    return (
        <Layout>
        <Header className={styles.headerConatiner} style={{ padding: 0, background: colorBgContainer }} >
            <div className="demo-logo">
                Test
            </div>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['4']}
                items={items}
            />
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
    )
}
