import React from 'react';
import {Card, Flex, Heading, Text} from "@radix-ui/themes";
import IssueStatusBadge from "../../components/IssueStatusBadge";
import ReactMarkdown from "react-markdown";
import {Issue} from "@prisma/client";
const IssueDetails = ({issue}: {issue:Issue}) => {
    return (
        <div>
            <Heading>{issue.title}</Heading>
            <Flex className='space-x-3' my='2'>
                <IssueStatusBadge status={issue.status} />
                <Text>{issue.createAt.toDateString()}</Text>
            </Flex>
            <Card className='prose max-w-full' mt='4'>
                <ReactMarkdown>{issue.description}</ReactMarkdown>
            </Card>
        </div>
    );
};

export default IssueDetails;