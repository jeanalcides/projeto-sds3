import BarCharts from "components/BarCharts";
import DataTable from "components/DataTable";
import DonutCharts from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (

        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de Vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-secondary text-center">Taxa de Sucesso (%)</h5>
                        <BarCharts />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-secondary text-center">Todas Vendas</h5>
                        <DonutCharts />
                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary">Todas Vendas</h2>

                </div>
                <DataTable />

            </div>
            <Footer />
        </>

    );
}

export default Dashboard;