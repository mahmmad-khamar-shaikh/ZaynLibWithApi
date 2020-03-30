using Microsoft.EntityFrameworkCore.Migrations;

namespace Zaynlib.Data.Migrations
{
    public partial class relationmodified : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Subscription_BookId",
                table: "Subscription");

            migrationBuilder.CreateIndex(
                name: "IX_Subscription_BookId",
                table: "Subscription",
                column: "BookId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Subscription_SubscriberId",
                table: "Subscription",
                column: "SubscriberId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Subscription_BookId",
                table: "Subscription");

            migrationBuilder.DropIndex(
                name: "IX_Subscription_SubscriberId",
                table: "Subscription");

            migrationBuilder.CreateIndex(
                name: "IX_Subscription_BookId",
                table: "Subscription",
                column: "BookId");
        }
    }
}
