import SectionDashboardPartials from './SectionDashboardPartials';
export default function DashboardPartial1() {
    return (
        <div className="container-fluid featurs py-5">
            <div className="container py-4">
                <div className="row g-5">
                    <SectionDashboardPartials
                        title="Livraison Gratuite"
                        content="Pour toute commande superieur à 500000GNF"
                    />
                    <SectionDashboardPartials
                        title="Payement sécurisé"
                        content="Les payements dans la plateforme sont 100% securisé"
                    />
                    <SectionDashboardPartials
                        title="Remboursement"
                        content="Garantie de remboursement dans les 30 jours"
                    />
                    <SectionDashboardPartials
                        title="Support 24/7"
                        content="Support ouvert 24h/24 pour un service client"
                    />
                </div>
            </div>
        </div>
    )
}