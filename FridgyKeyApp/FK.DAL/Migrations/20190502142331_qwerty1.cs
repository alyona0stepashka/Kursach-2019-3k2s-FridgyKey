using Microsoft.EntityFrameworkCore.Migrations;

namespace FK.DAL.Migrations
{
    public partial class qwerty1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fridge_AspNetUsers_ApplicationUserId",
                table: "Fridge");

            migrationBuilder.DropForeignKey(
                name: "FK_Sticker_Fridge_FridgeId",
                table: "Sticker");

            migrationBuilder.DropIndex(
                name: "IX_Fridge_ApplicationUserId",
                table: "Fridge");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "Fridge");

            migrationBuilder.AlterColumn<int>(
                name: "FridgeId",
                table: "Sticker",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Product",
                maxLength: 450,
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 50,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Product",
                maxLength: 450,
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 255,
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Login",
                table: "AspNetUsers",
                maxLength: 450,
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Sticker_Fridge_FridgeId",
                table: "Sticker",
                column: "FridgeId",
                principalTable: "Fridge",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sticker_Fridge_FridgeId",
                table: "Sticker");

            migrationBuilder.DropColumn(
                name: "Login",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<int>(
                name: "FridgeId",
                table: "Sticker",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Product",
                maxLength: 50,
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 450,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Product",
                maxLength: 255,
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 450,
                oldNullable: true);

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

            migrationBuilder.AddForeignKey(
                name: "FK_Sticker_Fridge_FridgeId",
                table: "Sticker",
                column: "FridgeId",
                principalTable: "Fridge",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
