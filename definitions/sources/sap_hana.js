[
  "vbak"
].forEach((name) =>
  declare({
    database: "raw-data-438007", 
    schema: "sap_hana",
    name,
  })
);