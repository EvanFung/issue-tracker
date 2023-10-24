import React from 'react';
import prisma from "@/prisma/client";
import {notFound} from "next/navigation";
import delay from "delay";
import {Heading, Text, Flex, Card} from "@radix-ui/themes";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import ReactMarkdown from "react-markdown";

interface Props {
    params: {
        id: string;
    }
}
const IssueDetailPage = async ({params}: Props) => {
    const issue = await prisma.issue.findUnique({
        where:{id: parseInt(params.id)}
    });
    if(!issue) {
        notFound();
    }
    await delay(1000);
    return (
        <div>
            <Heading>{issue.title}</Heading>
            <Flex className='space-x-3' my='2'>
                <IssueStatusBadge status={issue.status} />
                <Text>{issue.createAt.toDateString()}</Text>
            </Flex>
            <Card className='prose' mt='4'>
                <ReactMarkdown>{issue.description}</ReactMarkdown>
            </Card>

        </div>
    );
};

export default IssueDetailPage;