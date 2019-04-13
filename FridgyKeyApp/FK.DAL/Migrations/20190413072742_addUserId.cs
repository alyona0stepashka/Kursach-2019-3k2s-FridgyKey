using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FK.DAL.Migrations
{
    public partial class addUserId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fridge_AspNetUsers_UserId",
                table: "Fridge");

            migrationBuilder.DropIndex(
                name: "IX_Fridge_UserId",
                table: "Fridge");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Fridge");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Product",
                nullable: false,
                oldClrType: typeof(int))
                .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId",
                table: "Fridge",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Fridge_ApplicationUserId",
                table: "Fridge",
                column: "ApplicationUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Fridge_AspNetUsers_ApplicationUserId",
                table: "Fridge",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fridge_AspNetUsers_ApplicationUserId",
                table: "Fridge");

            migrationBuilder.DropIndex(
                name: "IX_Fridge_ApplicationUserId",
                table: "Fridge");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "Fridge");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Product",
                nullable: false,
                oldClrType: typeof(int))
                .OldAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Fridge",
                maxLength: 450,
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Fridge_UserId",
                table: "Fridge",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Fridge_AspNetUsers_UserId",
                table: "Fridge",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
