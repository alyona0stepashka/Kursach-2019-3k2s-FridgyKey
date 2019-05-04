using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FK.DAL.Migrations
{
    public partial class log_add : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sticker_Fridge_FridgeId",
                table: "Sticker");

            migrationBuilder.AlterColumn<int>(
                name: "FridgeId",
                table: "Sticker",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "EventLogs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    EventId = table.Column<int>(nullable: false),
                    LogLevel = table.Column<string>(nullable: true),
                    Message = table.Column<string>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventLogs", x => x.Id);
                });

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

            migrationBuilder.DropTable(
                name: "EventLogs");

            migrationBuilder.AlterColumn<int>(
                name: "FridgeId",
                table: "Sticker",
                nullable: true,
                oldClrType: typeof(int));

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
