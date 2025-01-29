const pulumi = require("@pulumi/pulumi");
const azure = require("@pulumi/azure-native");

const resourceGroup = new azure.resources.ResourceGroup("myResourceGroup", {
    resourceGroupName: "rg-pulumi-language-trainer-uks-001",
    location: "uksouth",
});

exports.resourceGroupName = resourceGroup.name;
