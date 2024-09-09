"use client";
import AdminPanelCompetitionFiles from "./AdminPanel-CompetitionFiles";
import AdminPanelCompetitorFiles from "./AdminPanel-CompetitorFiles";
export default function AdminPanelComponent() {


  return (
    <div className="flex flex-col w-full items-center gap-10">
      <h1 className="text-3xl m-auto p-10">Espace bureau</h1>

     <AdminPanelCompetitionFiles />
     <AdminPanelCompetitorFiles />
    </div>
  );
}
